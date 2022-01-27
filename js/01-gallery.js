import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('div.gallery');
const galleryMarkupRef = createGalleruMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkupRef);

function createGalleruMarkup(items) {
    return items
        .map(item => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
</div>`;
        })
        .join('');
}
