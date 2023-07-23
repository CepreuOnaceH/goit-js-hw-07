import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {
  const galleryList = document.querySelector('.gallery');
  let activeModalInstance = null;

  const createGalleryItemMarkup = ({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  };

  const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

  galleryList.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('gallery__image')) {
      const largeImageUrl = target.dataset.source;
      openModal(largeImageUrl);
    }
  });

  function openModal(url) {
    const instance = basicLightbox.create(`<img src="${url}" alt="Image description">`, {
      onShow: () => {
        activeModalInstance = instance;
        document.addEventListener('keydown', handleKeyPress);
      },
      onClose: () => {
        activeModalInstance = null;
        document.removeEventListener('keydown', handleKeyPress);
      },
    });
    instance.show();
  }

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      activeModalInstance.close();
    }
  }
});