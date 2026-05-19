import { imageLoadingAttrs } from '../services/imageDelivery.js';

export function renderAvatarContent(imageData, fallback, alt = 'avatar') {
  if (imageData) {
    return `<img class="avatar__image" src="${imageData}" alt="${alt}" ${imageLoadingAttrs()} />`;
  }
  return `<span class="avatar__label">${fallback}</span>`;
}
