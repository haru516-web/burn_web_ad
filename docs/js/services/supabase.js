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

export async function signUpWithEmail(email, password, { redirectPath = '/' } = {}) {
  const client = requireSupabase();
  return client.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: getAuthRedirectUrl(redirectPath),
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

export async function getCurrentSession() {
  const client = requireSupabase();
  return client.auth.getSession();
}

export function onAuthStateChange(callback) {
  const client = requireSupabase();
  return client.auth.onAuthStateChange(callback);
}
