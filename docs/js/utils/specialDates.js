function parseDateKey(dateString) {
  const match = String(dateString || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  };
}

function formatDateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function recurringDateForYear(sourceDate, targetDate) {
  const source = parseDateKey(sourceDate);
  const target = parseDateKey(targetDate);
  if (!source || !target) return '';
  return formatDateKey(target.year, source.month, source.day);
}

export function getSpecialDateEntries(state = {}, targetDate = '') {
  const couple = state.couple || {};
  const profile = state.profile || {};
  const entries = [];
  const anniversaryDate = recurringDateForYear(couple.anniversaryDate, targetDate);
  const birthdayDate = recurringDateForYear(couple.birthdayDate || profile.birthday, targetDate);

  if (anniversaryDate) {
    entries.push({
      id: `special-anniversary-${anniversaryDate}`,
      date: anniversaryDate,
      title: '記念日',
      time: '',
      place: '記念日',
      note: 'ふたりの記念日',
      tags: ['special', 'anniversary'],
      isSpecialDate: true,
      specialDateType: 'anniversary',
    });
  }

  if (birthdayDate) {
    entries.push({
      id: `special-birthday-${birthdayDate}`,
      date: birthdayDate,
      title: '誕生日',
      time: '',
      place: '誕生日',
      note: '誕生日',
      tags: ['special', 'birthday'],
      isSpecialDate: true,
      specialDateType: 'birthday',
    });
  }

  return entries;
}

export function getCalendarEntriesWithSpecialDates(state = {}, targetDate = '') {
  const calendarEntries = state.couple?.calendarEntries || [];
  const specialEntries = getSpecialDateEntries(state, targetDate);
  return [...calendarEntries, ...specialEntries];
}

export function getEntriesForDateWithSpecialDates(state = {}, dateString = '') {
  return getCalendarEntriesWithSpecialDates(state, dateString)
    .filter((entry) => entry.date === dateString);
}
