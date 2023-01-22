import { IMask } from "../libs.js";

const element = document.querySelectorAll(".js-form__input--telephone");

function initMask() {
  element.forEach((item) => {
    const maskOptions = {
      mask: "+{7}(000)000-00-00",
    };
    const mask = IMask(item, maskOptions);
  });
}

export { initMask };
