import { scrollPageDisabled, scrollPageEnabled } from "./toggleScrollPage.js";

const burger = document.querySelector(".js-burger");
const burgerButton = document.querySelector(".js-burger-button");

function toggleBurger() {
  if (burger.classList.contains("um-header__burger-wrapper--active")) {
    burger.classList.remove("um-header__burger-wrapper--active");
    burgerButton.classList.remove("um-header__burger-button--close");
    scrollPageEnabled();
  } else {
    burger.classList.add("um-header__burger-wrapper--active");
    burgerButton.classList.add("um-header__burger-button--close");
    scrollPageDisabled();
  }
}

export { burger, burgerButton, toggleBurger };
