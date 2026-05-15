alter table public.couple_todos
  add column if not exists done_at timestamptz;
