const aboutImgSelector = document.querySelector(".um-about-company__image");

export const toggleImages = () => {
  if (window.innerWidth > 1023) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
  } else if (window.innerWidth <= 1023 && window.innerWidth > 400) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageTablet;
  } else if (window.innerWidth <= 400) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
  }
};
