import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('div.gallery');
const galleryMarkupRef = createGalleruMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkupRef);
galleryRef.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const imgOriginalSize = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${imgOriginalSize}" width="800" height="600">
`);

    instance.show();

    window.addEventListener('keydown', closingModalWithButtonEsc);

    function closingModalWithButtonEsc(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close();
        }
    }

    // window.removeEventListener('keydown', closingModalWithButtonEsc);
}

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
