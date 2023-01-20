import { scrollPageDisabled, scrollPageEnabled } from "./toggleScrollPage.js";

const overflow = document.querySelector(".js-overflow");
const thanksPopup = document.querySelector(".js-popup-thanks");
const callPopup = document.querySelector(".js-popup-call");
const btnCloseCallPopup = callPopup.querySelector(".js-close-btn");
const btnCloseThanksPopup = thanksPopup.querySelector(".js-close-btn");
const btnOpenCallPopupHeader = document.querySelector(".js-header-call-btn");
const btnOpenCallPopupBurger = document.querySelector(".js-burger-call-btn");

const togglePopups = (popup) => {
  if (popup.classList.contains("is-visible")) {
    scrollPageEnabled();
  } else {
    scrollPageDisabled();
  }

  popup.classList.toggle("is-visible");
  overflow.classList.toggle("is-visible");
};

export {
  thanksPopup,
  callPopup,
  btnCloseCallPopup,
  btnCloseThanksPopup,
  btnOpenCallPopupHeader,
  btnOpenCallPopupBurger,
  togglePopups,
};
