const pageForm = document.querySelector(".js-form-submit--page");
const popupForm = document.querySelector(".js-form-submit--popup");
const inputNamePage = document.querySelector(".js-form__input--name-page");
const inputTelPage = document.querySelector(".js-form__input--telephone-page");
const inputNameBurger = document.querySelector(".js-form__input--name-burger");
const inputTelBurger = document.querySelector(
  ".js-form__input--telephone-burger"
);

const formSubmit = (evt) => {
  evt.preventDefault();
  inputNamePage.value = "";
  inputTelPage.value = "";
  inputNameBurger.value = "";
  inputTelBurger.value = "";
};

export { pageForm, popupForm, formSubmit };
