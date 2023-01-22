const aboutImgSelector = document.querySelector(".um-about-company__image");
const promoTitle = document.querySelector(".js-change-title");
const certificateSubtitle = document.querySelector(".js-certificate__subtitle");

export const toggleContent = () => {
  if (window.innerWidth > 1023) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
    promoTitle.textContent = promoTitle.dataset.textDesctop;
    certificateSubtitle.textContent = certificateSubtitle.dataset.textPc;
  } else if (window.innerWidth <= 1023 && window.innerWidth > 767) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageTablet;
    promoTitle.textContent = promoTitle.dataset.textDesctop;
    certificateSubtitle.textContent = certificateSubtitle.dataset.textTablet;
  } else if (window.innerWidth <= 767) {
    aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
    promoTitle.textContent = promoTitle.dataset.textMobile;
    certificateSubtitle.textContent = certificateSubtitle.dataset.textTablet;
  }
};
