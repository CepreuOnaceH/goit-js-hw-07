import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {
  const galleryList = document.querySelector('.gallery');

  const createGalleryItemMarkup = ({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  };

  const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

  // Инициализация библиотеки SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
});