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

function isMissingRpcError(error) {
  return error?.code === 'PGRST202'
    || error?.status === 404
    || /Could not find the function|404|Not Found/i.test(String(error?.message || ''));
}

function createInviteCode() {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
}

async function createInviteLinkDirect(client, user, memorySpaceId) {
  const expiresAt = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)).toISOString();
  let lastError = null;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const code = createInviteCode();
    const { data, error } = await client
      .from('invite_links')
      .insert({
        couple_id: memorySpaceId,
        inviter_id: user.id,
        code,
        expires_at: expiresAt,
      })
      .select('code, expires_at')
      .single();

    if (!error) {
      const rowCode = String(data?.code || code).trim();
      return {
        code: rowCode,
        url: buildInviteUrl(rowCode),
        expiresAt: data?.expires_at || expiresAt,
      };
    }

    lastError = error;
    if (error.code !== '23505') break;
  }

  throw lastError || new Error('招待リンクを発行できませんでした');
}

export async function createInviteLink() {
  const client = requireSupabase();
  const { user, memorySpaceId } = await ensureProfileAndMemorySpace();
  const { data, error } = await client.rpc('create_invite_link', {
    target_couple_id: memorySpaceId,
  });
  if (error && isMissingRpcError(error)) {
    return createInviteLinkDirect(client, user, memorySpaceId);
  }
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
