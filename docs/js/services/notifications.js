import { ensureProfileAndMemorySpace } from './completedPages.js';
import { requireSupabase } from './supabase.js';

const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY || '';
const PUSH_WORKER_FILE = 'push-service-worker.js';
const DATE_END_NOTICE_OFFSET_MINUTES = 10;

function urlBase64ToUint8Array(value) {
  const padding = '='.repeat((4 - (value.length % 4)) % 4);
  const base64 = `${value}${padding}`.replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function normalizeTimeValue(value = '') {
  const text = String(value || '').trim();
  return /^\d{2}:\d{2}$/.test(text) ? text : '';
}

export function getDateEndNotificationTime(dateKey = '', endTime = '') {
  const time = normalizeTimeValue(endTime);
  if (!dateKey || !time) return '';
  const scheduledAt = new Date(`${dateKey}T${time}:00`);
  if (Number.isNaN(scheduledAt.getTime())) return '';
  scheduledAt.setMinutes(scheduledAt.getMinutes() + DATE_END_NOTICE_OFFSET_MINUTES);
  return scheduledAt.toISOString();
}

export async function ensurePushSubscription() {
  if (
    typeof window === 'undefined'
    || !('serviceWorker' in navigator)
    || !('PushManager' in window)
    || !('Notification' in window)
  ) {
    return null;
  }
  if (!VAPID_PUBLIC_KEY) {
    console.warn('VITE_VAPID_PUBLIC_KEY is not set. Web push subscription was skipped.');
    return null;
  }
  if (Notification.permission === 'denied') return null;
  const permission = Notification.permission === 'granted'
    ? 'granted'
    : await Notification.requestPermission();
  if (permission !== 'granted') return null;

  const workerUrl = new URL(PUSH_WORKER_FILE, window.location.href);
  const registration = await navigator.serviceWorker.register(workerUrl);
  const existing = await registration.pushManager.getSubscription();
  const subscription = existing || await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
  });

  const client = requireSupabase();
  const { user } = await ensureProfileAndMemorySpace({ scope: 'personal' });
  const serialized = subscription.toJSON();
  const { error } = await client
    .from('push_subscriptions')
    .upsert({
      user_id: user.id,
      endpoint: serialized.endpoint,
      p256dh: serialized.keys?.p256dh || '',
      auth: serialized.keys?.auth || '',
      user_agent: navigator.userAgent || '',
      updated_at: new Date().toISOString(),
    }, { onConflict: 'endpoint' });
  if (error) throw error;
  return subscription;
}

export async function scheduleDateEndNotification(entry, { endTime = '', storageScope = 'shared' } = {}) {
  if (!entry?.id) return null;
  const scheduledFor = getDateEndNotificationTime(entry.date, endTime);
  if (!scheduledFor) return null;
  const scheduledAt = new Date(scheduledFor);
  if (scheduledAt.getTime() <= Date.now()) return null;

  const client = requireSupabase();
  const { user, memorySpaceId } = await ensureProfileAndMemorySpace({
    scope: storageScope === 'personal' ? 'personal' : 'shared',
  });
  const title = 'デートの余韻を残しませんか';
  const body = `${entry.title || '今日の予定'}が終わって少し経ちました。ふたりの記録を残しましょう。`;
  const { data, error } = await client
    .from('notifications')
    .upsert({
      user_id: user.id,
      memory_space_id: memorySpaceId,
      type: 'date_end_reminder',
      title,
      body,
      target_type: 'couple_calendar_entry',
      target_key: entry.id,
      delivery_channels_json: ['web_push', 'in_app'],
      scheduled_for: scheduledFor,
      sent_at: null,
      read_at: null,
    }, { onConflict: 'user_id,type,target_type,target_key' })
    .select('*')
    .single();
  if (error) throw error;
  return data;
}
