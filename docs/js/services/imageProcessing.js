export function dataUrlToBlob(dataUrl) {
  const [meta, content] = String(dataUrl || '').split(',');
  const mime = meta?.match(/data:([^;]+)/)?.[1] || 'image/webp';
  const binary = atob(content || '');
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mime });
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Failed to load image.'));
    image.src = dataUrl;
  });
}

function canvasToWebpBlob(canvas, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Failed to convert image to WebP.'));
    }, 'image/webp', quality);
  });
}

export async function dataUrlToWebpBlob(dataUrl, { maxWidth = 1600, quality = 0.82 } = {}) {
  const image = await loadImage(dataUrl);
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  if (!sourceWidth || !sourceHeight) return dataUrlToBlob(dataUrl);

  const scale = Math.min(1, maxWidth / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * scale));
  const height = Math.max(1, Math.round(sourceHeight * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return dataUrlToBlob(dataUrl);
  ctx.drawImage(image, 0, 0, width, height);
  return canvasToWebpBlob(canvas, quality);
}

