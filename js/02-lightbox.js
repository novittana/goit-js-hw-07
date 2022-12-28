import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const makeGalleryItem = ({ preview, original, description } = {}) => {
  return `
  <li>
      <a class="gallery__item" href=${original}>
        <img
          class="gallery__image"
          src= ${preview}
          alt= ${description}
        />
      </a>
    </li>
      `;
};

const galleryCards = galleryItems.map(makeGalleryItem).join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryCards);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDeley: 250,
});
