// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const wrappedImageHTMLElements = galleryItems.map(imageInfo => {
  return `<a class="gallery__item" href="${imageInfo.original}">
            <img class="gallery__image" src="${imageInfo.preview}" alt="${imageInfo.description}">
         </a>`
}).join('');

const galleryArea = document.querySelector('.gallery');
galleryArea.insertAdjacentHTML('afterbegin', wrappedImageHTMLElements);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});