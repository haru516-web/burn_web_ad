import { requireSupabase } from './supabase.js';
import { ensureProfileAndMemorySpace } from './completedPages.js';

export function getInviteCodeFromUrl() {
  if (typeof window === 'undefined') return '';
  return String(new URLSearchParams(window.location.search).get('code') || '').trim();
}

export function buildInviteUrl(code) {
  if (typeof window === 'undefined' || !code) return '';
  const url = new URL('/invite', window.location.origin);
  url.searchParams.set('code', code);
  return url.toString();
}

export async function createInviteLink() {
  const client = requireSupabase();
  const { memorySpaceId } = await ensureProfileAndMemorySpace();
  const { data, error } = await client.rpc('create_invite_link', {
    target_couple_id: memorySpaceId,
  });
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  const code = String(row?.code || '').trim();
  if (!code) throw new Error('招待コードを作成できませんでした');
  return {
    code,
    url: buildInviteUrl(code),
    expiresAt: row?.expires_at || null,
  };
}

export async function acceptInviteLink(code) {
  const normalizedCode = String(code || '').trim();
  if (!normalizedCode) throw new Error('招待コードがありません');
  const client = requireSupabase();
  await ensureProfileAndMemorySpace();
  const { data, error } = await client.rpc('accept_invite_link', {
    invite_code: normalizedCode,
  });
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  return {
    coupleId: row?.couple_id || null,
    status: row?.status || 'accepted',
  };
}
