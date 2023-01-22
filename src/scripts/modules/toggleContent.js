const aboutImgSelector = document.querySelector(".um-about-company__image");
const promoTitle = document.querySelector(".js-change-title");
const certificateSubtitle = document.querySelector(".js-certificate__subtitle");
const bannerBankruptcy = document.querySelector(".js-bankruptcy-banner");
const bannerTaxDisputs = document.querySelector(".js-tax-disputs-banner");
const bannerMediation = document.querySelector(".js-mediation-banner");

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

const checkLocation = () => {
  const location = window.location.pathname;

  if (location === "/bankruptcy.html") {
    return bannerBankruptcy;
  } else if (location === "/mediation.html") {
    return bannerMediation;
  } else if (location === "/tax-disputs.html") {
    return bannerTaxDisputs;
  } else {
    return;
  }
};

export const toggleBannerBackground = () => {
  const isBanner = checkLocation();

  if (isBanner) {
    if (window.innerWidth > 1023) {
      isBanner.style = isBanner.dataset.imgDesctop;
    } else if (window.innerWidth <= 1023 && window.innerWidth > 767) {
      isBanner.style = isBanner.dataset.imgTablet;
    } else if (window.innerWidth <= 767) {
      isBanner.style = isBanner.dataset.imgMobile;
    }
  }
};
