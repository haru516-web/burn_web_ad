function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderInvite(uiState = {}) {
  const code = escapeHtml(uiState.inviteCode || '');
  const isBusy = Boolean(uiState.inviteAcceptBusy);
  const message = uiState.inviteMessage || '';
  const error = uiState.inviteError || '';

  return `
    <section class="page invite-screen">
      <form class="invite-card" data-invite-form>
        <div class="invite-card__copy">
          <p class="invite-card__eyebrow">Invitation</p>
          <h1 class="invite-card__title">招待を承認</h1>
          <p class="invite-card__lead">相手から届いたリンクで、ふたりのスペースに参加します。</p>
        </div>
        <label class="invite-card__field">
          <input
            class="invite-card__input"
            type="text"
            name="inviteCode"
            inputmode="text"
            autocomplete="one-time-code"
            maxlength="32"
            placeholder="invite code"
            value="${code}"
            aria-label="招待コード"
            data-invite-code
          />
        </label>
        <button class="invite-card__submit" type="submit" ${isBusy ? 'disabled' : ''}>${isBusy ? '承認中' : '招待を承認する'}</button>
        ${message ? `<p class="invite-card__message">${escapeHtml(message)}</p>` : ''}
        ${error ? `<p class="invite-card__error" data-invite-error>${escapeHtml(error)}</p>` : ''}
      </form>
    </section>
  `;
}
