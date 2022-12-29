import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);
galleryItems.forEach(function(element) {
    const itemOfElement = document.createElement("li");
    const linkOfElement = document.createElement("a");
    linkOfElement.classList.add("gallery__item");
    linkOfElement.setAttribute("href", element.original);
    const imageOfGallery = document.createElement("img");
    imageOfGallery.classList.add("gallery__image");
    imageOfGallery.setAttribute("src", element.preview);
    imageOfGallery.setAttribute("alt", element.description);
    gallery.append(itemOfElement);
    itemOfElement.append(linkOfElement);
    linkOfElement.append(imageOfGallery);
    });
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
const itemOfGallery = document.querySelectorAll("li");
itemOfGallery.forEach((element) => {
    element.style.listStyleType = "none";
});