import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');

const imageMarkup = createImageCardMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

imageContainer.addEventListener('click', onImageContainerClick);

function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div>`
    }).join('');
}

function onImageContainerClick(evt) {
    const isImgSwatchEl = evt.target.classList.contains('gallery__image');

    if (!isImgSwatchEl) {
        return;
    }


    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`)

    instance.show()
}