import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');

const imageMarkup = createImageCardMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

imageContainer.addEventListener('click', onImageContainerClick);

function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`
    }).join('');
}

function onImageContainerClick(evt) {
    const isImgSwatchEl = evt.target.classList.contains('gallery__image');

    if (!isImgSwatchEl) {
        return;
    }

    evt.preventDefault();

    let gallery = new SimpleLightbox('.gallery a');

    
}