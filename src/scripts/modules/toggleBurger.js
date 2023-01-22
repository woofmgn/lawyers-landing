const burgerOverlay = document.querySelector(".js-burger-container");
const burger = document.querySelector(".js-burger");
const burgerButton = document.querySelector(".js-burger-button");

function toggleBurger() {
  if (burger.classList.contains("um-header__burger-wrapper--active")) {
    burger.classList.remove("um-header__burger-wrapper--active");
    burgerButton.classList.remove("um-header__burger-button--close");
    burgerOverlay.classList.remove("um-header__burger-container--is-active");
  } else {
    burger.classList.add("um-header__burger-wrapper--active");
    burgerButton.classList.add("um-header__burger-button--close");
    burgerOverlay.classList.add("um-header__burger-container--is-active");
  }
}

export { burgerButton, burgerOverlay, toggleBurger };
