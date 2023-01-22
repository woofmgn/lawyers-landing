import { formSubmit, pageForm, popupForm } from "./modules/formSubmit.js";
import { mapInit } from "./modules/geoMap.js";
import { initMask } from "./modules/telephoneMask.js";
import {
  burgerButton,
  burgerOverlay,
  toggleBurger,
} from "./modules/toggleBurger.js";
import {
  toggleBannerBackground,
  toggleContent,
} from "./modules/toggleContent.js";
import { toggleColorLink } from "./modules/togglePageLink.js";
import {
  btnCloseCallPopup,
  btnCloseThanksPopup,
  btnOpenCallPopupBurger,
  btnOpenCallPopupHeader,
  callPopup,
  closePopupClickOverlay,
  overflow,
  thanksPopup,
  togglePopups,
} from "./modules/togglePopups.js";
import {
  toggleQtySwiperSlideCertificate,
  toggleQtySwiperSlideTeam,
} from "./modules/toggleQtySwiperSlide.js";

const location = window.location.pathname;

// изменение цвета ссылок страниц
toggleColorLink();

// подключение масок телефона в инпутах
initMask();

if (location !== "/" && location !== "/contacts-page.html") {
  toggleBannerBackground();
}

if (location === "/") {
  toggleContent();
  toggleQtySwiperSlideTeam();
  toggleQtySwiperSlideCertificate();
}

if (location === "/contacts-page.html") {
  ymaps.ready(mapInit);
}

burgerButton.addEventListener("click", () => {
  toggleBurger();
});

if (pageForm) {
  pageForm.addEventListener("submit", (evt) => {
    formSubmit(evt);
    togglePopups(thanksPopup);
  });
}

popupForm.addEventListener("submit", (evt) => {
  formSubmit(evt);
  togglePopups(callPopup);
  togglePopups(thanksPopup);
});

btnOpenCallPopupHeader.addEventListener("click", () => {
  togglePopups(callPopup);
});

btnOpenCallPopupBurger.addEventListener("click", () => {
  togglePopups(callPopup);
});

if (btnCloseCallPopup) {
  btnCloseCallPopup.addEventListener("click", () => {
    togglePopups(callPopup);
  });
}

btnCloseThanksPopup.addEventListener("click", () => {
  togglePopups(thanksPopup);
});

overflow.addEventListener("click", () => {
  closePopupClickOverlay(callPopup);
  closePopupClickOverlay(thanksPopup);
});

burgerOverlay.addEventListener("click", () => {
  toggleBurger();
});
