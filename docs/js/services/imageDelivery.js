const SIGNED_URL_TTL_SECONDS = 60 * 60;
const SIGNED_URL_REFRESH_MARGIN_MS = 5 * 60 * 1000;

export const REMOTE_IMAGE_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560"%3E%3Crect width="800" height="560" fill="%23f4f0ec"/%3E%3Cpath d="M245 353l92-112 78 82 48-54 92 84H245z" fill="%23d8cec5"/%3E%3Ccircle cx="506" cy="210" r="36" fill="%23d8cec5"/%3E%3C/svg%3E';

export const remoteImagesEnabled = import.meta.env.VITE_USE_REMOTE_IMAGES !== 'false';

const signedUrlCache = new Map();

export function imageLoadingAttrs(priority = 'low') {
  return `loading="lazy" decoding="async" fetchpriority="${priority}"`;
}

export function getRemoteImagePlaceholder() {
  return REMOTE_IMAGE_PLACEHOLDER;
}

export async function getStorageImageUrl(client, bucket, storagePath, { publicBucket = false } = {}) {
  const path = String(storagePath || '').trim();
  if (!path) return '';
  if (!remoteImagesEnabled) return REMOTE_IMAGE_PLACEHOLDER;

  const cacheKey = `${bucket}:${path}:${publicBucket ? 'public' : 'signed'}`;
  const cached = signedUrlCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now() + SIGNED_URL_REFRESH_MARGIN_MS) {
    return cached.url;
  }

  if (publicBucket) {
    const { data } = client.storage.from(bucket).getPublicUrl(path);
    const publicUrl = data?.publicUrl || '';
    if (publicUrl) {
      signedUrlCache.set(cacheKey, {
        url: publicUrl,
        expiresAt: Number.MAX_SAFE_INTEGER,
      });
    }
    return publicUrl;
  }

  const { data, error } = await client.storage
    .from(bucket)
    .createSignedUrl(path, SIGNED_URL_TTL_SECONDS);
  if (!error && data?.signedUrl) {
    signedUrlCache.set(cacheKey, {
      url: data.signedUrl,
      expiresAt: Date.now() + (SIGNED_URL_TTL_SECONDS * 1000),
    });
    return data.signedUrl;
  }
  return '';
}

