import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('ul.gallery');
const markupGalleruRef = createMarkupGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', markupGalleruRef);

function createMarkupGallery(elements) {
    return elements
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        })
        .join('');
}
