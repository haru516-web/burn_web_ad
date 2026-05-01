import { getIcon } from '../components/icons.js';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatTodayLabel(date = new Date()) {
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 (${weekdays[date.getDay()]})`;
}

function getSelectedMemories(memories, selectedIds) {
  const selected = new Set(selectedIds || []);
  return memories.filter((memory) => selected.has(memory.id)).slice(0, 3);
}

function renderMemoryCards(memories) {
  if (!memories.length) return '';
  return `
    <div class="record-timeline">
      ${memories.map((memory) => `
        <article class="record-memory-card">
          <time>${escapeHtml(memory.time)}</time>
          <img src="${memory.imageData}" alt="" />
          <div>
            <strong>${getIcon('pin')} ${escapeHtml(memory.place || '場所未設定')}</strong>
            <p>${escapeHtml(memory.memo || 'メモはまだありません。')}</p>
          </div>
          <button class="record-memory-card__edit" type="button" data-record-edit-memory="${memory.id}" aria-label="この思い出を編集">${getIcon('chevronRight')}</button>
        </article>
      `).join('')}
    </div>
  `;
}

function renderRecordPreviewCard(memories) {
  if (!memories.length) return '';
  const previewMemories = memories.slice(0, 3);
  return `
    <section class="record-page-preview-card">
      <div class="record-page-preview-card__head">
        ${getIcon('bookOpen')}
        <h2>今日のページ preview</h2>
      </div>
      <div class="record-page-preview-card__body">
        <div class="record-page-preview-card__mini">
          <p>COUPLE MEMORIES</p>
          <h3>A Day in Tokyo</h3>
          ${previewMemories.map((memory) => `
            <article>
              <time>${escapeHtml(memory.time)}</time>
              <img src="${memory.imageData}" alt="" />
              <span>${getIcon('pin')} ${escapeHtml(memory.place || 'Tokyo')}</span>
            </article>
          `).join('')}
        </div>
        <div class="record-page-preview-card__copy">
          <p>今日の思い出を1ページのマガジンにまとめます。保存やシェアもお楽しみに。</p>
          <button type="button" data-record-stage="select">プレビューを見る</button>
        </div>
      </div>
    </section>
  `;
}

function renderRecordHome(memories) {
  return `
    <section class="record-page record-page--home">
      <header class="record-header">
        <p class="record-header__title">記録</p>
        <div class="record-today-mark"><span></span><strong>TODAY</strong><span></span></div>
      </header>

      <section class="record-start-card">
        <div class="record-start-card__icon">${getIcon('camera')}</div>
        <div class="record-start-card__copy">
          <h1>今日の記録を残す</h1>
          <p>写真といっしょに、心に残ったことを記録してみましょう。</p>
          <button class="record-primary-button" type="button" data-record-open-camera>
            ${getIcon('camera')} カメラを起動
          </button>
        </div>
      </section>

      <section class="record-section">
        <div class="record-section__head">
          <h2>${getIcon('clock')} 今日の思い出</h2>
          ${memories.length ? `<button class="record-section__action" type="button" data-record-stage="select">すべて見る ${getIcon('chevronRight')}</button>` : ''}
        </div>
        ${renderMemoryCards(memories)}
      </section>

      ${renderRecordPreviewCard(memories)}
    </section>
  `;
}

function renderRecordCamera(draft) {
  const hasPhoto = Boolean(draft?.imageData);
  return `
    <section class="record-page record-page--camera">
      <header class="record-camera-header">
        <button type="button" data-record-back-home aria-label="閉じる">${getIcon('close')}</button>
        <h1>写真を記録</h1>
        <span>${getIcon('bolt')}</span>
      </header>

      <div class="record-camera-preview ${hasPhoto ? 'has-photo' : ''}">
        ${hasPhoto
          ? `<img src="${draft.imageData}" alt="" />`
          : `<div class="record-camera-placeholder">${getIcon('camera')}<p>シャッターを押すと写真がここに表示されます。</p></div>`}
        <div class="record-time-pill">${getIcon('clock')} <strong>${escapeHtml(draft?.time || '--:--')}</strong> 自動記録</div>
      </div>

      <section class="record-capture-sheet ${hasPhoto ? 'is-expanded' : ''}">
        ${hasPhoto ? `
          <label class="record-field">
            <span>場所</span>
            <div class="record-input-wrap">${getIcon('pin')}<input type="text" data-record-place value="${escapeHtml(draft.place || '')}" placeholder="代官山" /></div>
          </label>
          <label class="record-field">
            <span>メモ (任意)</span>
            <input type="text" data-record-memo value="${escapeHtml(draft.memo || '')}" placeholder="例: カフェの雰囲気が素敵だった" />
          </label>
        ` : ''}
        <div class="record-camera-actions">
          <button class="record-secondary-button" type="button" data-record-open-album>${getIcon('image')} アルバム</button>
          <button class="record-shutter" type="button" data-record-open-camera-input aria-label="写真を撮る"></button>
          <button class="record-secondary-button record-save-button" type="button" data-record-save ${hasPhoto ? '' : 'disabled'}>保存</button>
        </div>
      </section>

      <input type="file" accept="image/*" capture="environment" data-record-camera-input hidden />
      <input type="file" accept="image/*" data-record-album-input hidden />
    </section>
  `;
}

function renderRecordEdit(memory) {
  if (!memory) return renderRecordHome([]);
  return `
    <section class="record-page record-page--edit-memory">
      <header class="record-stack-header">
        <button type="button" data-record-stage="home" aria-label="戻る">${getIcon('returnLeft')}</button>
        <h1>思い出を編集</h1>
      </header>

      <article class="record-edit-card">
        <img src="${memory.imageData}" alt="" />
        <div class="record-edit-card__time">${getIcon('clock')} <strong>${escapeHtml(memory.time)}</strong></div>
        <label class="record-field">
          <span>場所</span>
          <div class="record-input-wrap">${getIcon('pin')}<input type="text" data-record-edit-place value="${escapeHtml(memory.place || '')}" placeholder="代官山" /></div>
        </label>
        <label class="record-field">
          <span>メモ</span>
          <input type="text" data-record-edit-memo value="${escapeHtml(memory.memo || '')}" placeholder="例: カフェの雰囲気が素敵だった" />
        </label>
        <button class="record-primary-button" type="button" data-record-update-memory="${memory.id}">保存</button>
      </article>
    </section>
  `;
}

function renderRecordSelect(memories, selectedIds) {
  const selected = new Set(selectedIds || []);
  return `
    <section class="record-page record-page--select">
      <header class="record-stack-header">
        <button class="record-select-back" type="button" data-record-back-home aria-label="戻る">${getIcon('returnLeft')}</button>
        <h1>今日を振り返る</h1>
        <p class="record-select-date">${formatTodayLabel()}</p>
        <div class="record-select-rule"><span></span><i>♡</i><span></span></div>
        <p class="record-select-lead">使いたい写真を選択</p>
      </header>

      <div class="record-select-list">
        ${memories.map((memory, index) => {
          const isSelected = selected.has(memory.id);
          return `
            <button class="record-select-card ${isSelected ? 'is-selected' : ''}" type="button" data-record-toggle-memory="${memory.id}">
              <img src="${memory.imageData}" alt="" />
              <div class="record-select-card__copy">
                <strong><time>${escapeHtml(memory.time)}</time><span>${getIcon('pin')} ${escapeHtml(memory.place || '場所未設定')}</span></strong>
                <p>${escapeHtml(memory.memo || '今日の思い出')}</p>
                ${index === 0 ? '<em>メイン写真</em>' : ''}
              </div>
              <span class="record-select-card__check">${isSelected ? getIcon('check') : ''}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="record-create-bar">
        <p>選択中 <strong>${selected.size}</strong> / 3 枚</p>
        <button class="record-primary-button" type="button" data-record-create-page ${selected.size === 3 ? '' : 'disabled'}>ページを自動作成</button>
      </div>
    </section>
  `;
}

function renderGeneratedPagePreview(memories) {
  const [primary, secondary, tertiary] = memories;
  const renderSlot = (memory, className, fallbackLabel) => {
    if (!memory) return `<div class="${className} record-generated-slot is-empty">${fallbackLabel}</div>`;
    return `
      <article class="${className} record-generated-slot">
        <time>${escapeHtml(memory.time)}</time>
        <img src="${memory.imageData}" alt="" />
        <div>
          <strong>${getIcon('pin')} ${escapeHtml(memory.place || 'Tokyo')}</strong>
          <span>${escapeHtml(memory.memo || '今日の思い出')}</span>
        </div>
      </article>
    `;
  };

  return `
    <div class="record-generated-page">
      <p>COUPLE MEMORIES</p>
      <h2>A Day in Tokyo</h2>
      ${renderSlot(primary, 'record-generated-slot--primary', 'Photo 1')}
      ${renderSlot(secondary, 'record-generated-slot--secondary', 'Photo 2')}
      ${renderSlot(tertiary, 'record-generated-slot--tertiary', 'Photo 3')}
    </div>
  `;
}

function renderRecordComplete(memories) {
  return `
    <section class="record-page record-page--complete">
      <header class="record-stack-header">
        <button type="button" data-record-stage="select" aria-label="戻る">${getIcon('returnLeft')}</button>
        <h1>完成</h1>
      </header>
      <div class="record-complete-copy">
        <span>${getIcon('heart')}</span>
        <h2>今日の思い出が<br />1ページになりました</h2>
      </div>
      ${renderGeneratedPagePreview(memories)}
      <div class="record-complete-actions">
        <button type="button">${getIcon('download')}<span>保存する</span></button>
        <button type="button">${getIcon('camera')}<span>投稿する</span></button>
        <button type="button">${getIcon('bookOpen')}<span>雑誌化する</span></button>
        <button type="button">${getIcon('document')}<span>PDF</span></button>
      </div>
      <button class="record-outline-button" type="button" data-record-stage="select">あとで編集</button>
    </section>
  `;
}

export function renderRecord(state, uiState) {
  const memories = [...(state.recordMemories || [])].sort((a, b) => {
    const byTime = String(a.time || '').localeCompare(String(b.time || ''));
    if (byTime) return byTime;
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
  const stage = uiState.recordStage || 'home';

  if (stage === 'camera') return renderRecordCamera(uiState.recordDraft || {});
  if (stage === 'edit') return renderRecordEdit(memories.find((memory) => memory.id === uiState.recordEditingId));
  if (stage === 'select') return renderRecordSelect(memories, uiState.recordSelectedIds || []);
  if (stage === 'complete') return renderRecordComplete(getSelectedMemories(memories, uiState.recordSelectedIds || []));
  return renderRecordHome(memories);
}
