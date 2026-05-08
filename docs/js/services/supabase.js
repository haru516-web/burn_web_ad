import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export function requireSupabase() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.');
  }
  return supabase;
}

export function getAuthRedirectUrl(path = '/') {
  if (typeof window === 'undefined') return undefined;
  return new URL(path, window.location.origin).toString();
}

export async function signInWithEmailOtp(email, { redirectPath = '/' } = {}) {
  const client = requireSupabase();
  return client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: getAuthRedirectUrl(redirectPath),
    },
  });
}

export async function signUpWithEmail(email, password, { redirectPath = '/', name = '' } = {}) {
  const client = requireSupabase();
  return client.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: getAuthRedirectUrl(redirectPath),
      data: name ? { name } : undefined,
    },
  });
}

export async function signInWithEmailPassword(email, password) {
  const client = requireSupabase();
  return client.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  const client = requireSupabase();
  return client.auth.signOut();
}

export async function deleteCurrentAccount() {
  const client = requireSupabase();
  return client.rpc('delete_current_account');
}

export async function disconnectSharedSpace(spaceId) {
  const client = requireSupabase();
  return client.rpc('disconnect_shared_space', {
    target_space_id: spaceId,
  });
}

export async function updateCurrentUserProfile({ displayName, birthday } = {}) {
  const client = requireSupabase();
  const { data: userData, error: userError } = await client.auth.getUser();
  if (userError) throw userError;
  const user = userData.user;
  if (!user) throw new Error('ログインが必要です');

  const name = String(displayName || '').trim();
  if (name) {
    const { error: authError } = await client.auth.updateUser({
      data: { name },
    });
    if (authError) throw authError;
  }

  return client
    .from('profiles')
    .upsert({
      id: user.id,
      email: user.email || '',
      display_name: name || user.user_metadata?.name || user.email?.split('@')[0] || 'you',
      birthday: birthday || null,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'id' });
}

export async function getPartnerProfile() {
  const client = requireSupabase();
  const { data, error } = await client.rpc('get_partner_profile');
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  return {
    hasPartner: Boolean(row?.has_partner),
    name: row?.display_name || '',
    email: row?.email || '',
    birthday: row?.birthday || '',
  };
}

export async function getCurrentSession() {
  const client = requireSupabase();
  return client.auth.getSession();
}

export function onAuthStateChange(callback) {
  const client = requireSupabase();
  return client.auth.onAuthStateChange(callback);
}
