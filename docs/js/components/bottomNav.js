import { getIcon } from './icons.js';

export function renderBottomNav(screen) {
  const activeScreen = screen === 'timeline' ? 'home' : screen;
  const isHomeActive = activeScreen === 'home';
  const isRecordActive = activeScreen === 'record';
  const isProfileActive = activeScreen === 'profile';

  if (!['home', 'timeline', 'search', 'record', 'profile'].includes(screen)) {
    return '';
  }

  return `
    <nav class="timeline-bottom-nav" aria-label="Primary navigation">
      <button class="timeline-bottom-nav__item ${isHomeActive ? 'is-active' : ''}" type="button" data-home-nav="home" aria-label="ホーム">
        <span class="timeline-bottom-nav__icon" aria-hidden="true">${getIcon('home')}</span>
        <span class="timeline-bottom-nav__label">ホーム</span>
      </button>
      <button class="timeline-bottom-nav__item timeline-bottom-nav__item--compose" type="button" data-home-nav="compose" aria-label="編集">
        <span class="timeline-bottom-nav__icon" aria-hidden="true">${getIcon('post')}</span>
        <span class="timeline-bottom-nav__label">編集</span>
      </button>
      <button class="timeline-bottom-nav__item ${isRecordActive ? 'is-active' : ''}" type="button" data-home-nav="record" aria-label="記録">
        <span class="timeline-bottom-nav__icon" aria-hidden="true">${getIcon('camera')}</span>
        <span class="timeline-bottom-nav__label">記録</span>
      </button>
      <button class="timeline-bottom-nav__item ${isProfileActive ? 'is-active' : ''}" type="button" data-home-nav="profile" aria-label="ふたり">
        <span class="timeline-bottom-nav__icon" aria-hidden="true">${getIcon('profile')}</span>
        <span class="timeline-bottom-nav__label">ふたり</span>
      </button>
    </nav>
  `;
}
