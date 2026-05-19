self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = {
      title: '通知',
      body: event.data ? event.data.text() : '',
    };
  }

  const title = payload.title || '通知';
  const options = {
    body: payload.body || '',
    icon: payload.icon || '/image/icon/velna_toka.webp',
    badge: payload.badge || '/image/favicon/velna.webp',
    data: payload.data || {},
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';
  event.waitUntil((async () => {
    const clientsList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const existing = clientsList.find((client) => 'focus' in client);
    if (existing) {
      await existing.focus();
      return;
    }
    if (self.clients.openWindow) {
      await self.clients.openWindow(targetUrl);
    }
  })());
});
