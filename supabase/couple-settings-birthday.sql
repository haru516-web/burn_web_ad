alter table public.couple_settings
  add column if not exists birthday_date date;

update public.couple_settings
set
  birthday_date = profiles.birthday,
  updated_at = now()
from public.profiles
where public.couple_settings.author_id = profiles.id
  and public.couple_settings.birthday_date is null
  and profiles.birthday is not null;
