const aboutImgSelector = document.querySelector(".um-about-company__image");
const promoTitle = document.querySelector(".js-change-title");
// const advantagesTitle = document.querySelector(".js-advantages__title");
// const advanyagesCardTitle = document.querySelector(
//   ".js-advantages__item-title"
// );

export const toggleContent = () => {
  if (window.innerWidth > 1023) {
    if (window.location.href === "http://localhost:3000/") {
      aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
      promoTitle.textContent = promoTitle.dataset.textDesctop;
    }
    // advantagesTitle.textContent = advantagesTitle.dataset.titleDesctop;
    // advanyagesCardTitle.textContent = advanyagesCardTitle.dataset.titleDesctop;
    // console.log(advanyagesCardTitle.dataset.titleDesctop);
  } else if (window.innerWidth <= 1023 && window.innerWidth > 400) {
    if (window.location.href === "http://localhost:3000/") {
      aboutImgSelector.src = aboutImgSelector.dataset.imageTablet;
      promoTitle.textContent = promoTitle.dataset.textDesctop;
    }
    // advantagesTitle.textContent = advantagesTitle.dataset.titleDesctop;
    // advanyagesCardTitle.textContent = advanyagesCardTitle.dataset.titleDesctop;
    // console.log(advanyagesCardTitle.dataset.titleDesctop);
  } else if (window.innerWidth <= 400) {
    if (window.location.href === "http://localhost:3000/") {
      aboutImgSelector.src = aboutImgSelector.dataset.imageDesctop;
      promoTitle.textContent = promoTitle.dataset.textMobile;
    }
    // advantagesTitle.textContent = advantagesTitle.dataset.titleMobile;
    // advanyagesCardTitle.textContent = advanyagesCardTitle.dataset.titleMobile;
    // console.log(advanyagesCardTitle.dataset.titleDesctop);
  }
};
