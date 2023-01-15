const aboutImgSelector = document.querySelector(".um-about-company__image");
const promoTitle = document.querySelector(".js-change-title");

export const toggleImages = () => {
  if (window.innerWidth > 1023) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
    promoTitle.textContent = promoTitle.dataset.textDesctop;
  } else if (window.innerWidth <= 1023 && window.innerWidth > 400) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageTablet;
    promoTitle.textContent = promoTitle.dataset.textDesctop;
  } else if (window.innerWidth <= 400) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
    promoTitle.textContent = promoTitle.dataset.textMobile;
  }
};
