export const burger = document.querySelector(".js-burger");
export const burgerButton = document.querySelector(".js-burger-button");

export function toggleBurger() {
  if (burger.classList.contains("um-header__burger-wrapper--active")) {
    burger.classList.remove("um-header__burger-wrapper--active");
    burgerButton.classList.remove("um-header__burger-button--close");
  } else {
    burger.classList.add("um-header__burger-wrapper--active");
    burgerButton.classList.add("um-header__burger-button--close");
  }
}
