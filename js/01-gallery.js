import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const makeGalleryItem = ({ preview, original, description } = {}) => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src= ${preview}
          data-source= ${original}
          alt= ${description}
        />
      </a>
    </div>`;
};

const galleryCards = galleryItems.map(makeGalleryItem).join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryCards);

const onGalleryImgClick = (event) => {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== "IMG") {
    return;
  }
  const largeImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img
          class="gallery__image"
          src= "${largeImageUrl}" width="800" height="600">
`);

  instance.show();
  galleryRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};

galleryRef.addEventListener("click", onGalleryImgClick);
