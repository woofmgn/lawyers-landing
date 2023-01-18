import { formSubmit, pageForm, popupForm } from "./modules/formSubmit.js";
import { mapInit } from "./modules/geoMap.js";
import { inputLabelTranslate } from "./modules/inputLabelTranslate.js";
import { notify } from "./modules/notify.js";
import { scrollToTop } from "./modules/scrollToTop.js";
import { showFieldError } from "./modules/showFieldError.js";
import { burgerButton, toggleBurger } from "./modules/toggleBurger.js";
import { toggleContent } from "./modules/toggleContent.js";
import { togglePopup } from "./modules/togglePopup.js";
import {
  btnCloseCallPopup,
  btnCloseThanksPopup,
  btnOpenCallPopupBurger,
  btnOpenCallPopupHeader,
  callPopup,
  thanksPopup,
  togglePopups,
} from "./modules/togglePopups.js";
import {
  toggleQtySwiperSlideCertificate,
  toggleQtySwiperSlideTeam,
} from "./modules/toggleQtySwiperSlide.js";
// import { translateHeader } from "./modules/translateHeader.js";

if (window.location.pathname === "/contacts-page.html") {
  ymaps.ready(mapInit);
}

if (window.location.pathname === "/") {
  toggleQtySwiperSlideTeam();
  toggleQtySwiperSlideCertificate();
}

if (window.location.pathname === "/") {
  toggleContent();
}

// window.addEventListener("resize", () => {
//   if (window.location.href === "/" || "http://localhost:3000/") {
//     toggleQtySwiperSlideTeam();
//     toggleQtySwiperSlideCertificate();
//   }
//   toggleContent();
// });

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

document.addEventListener("DOMContentLoaded", function () {
  // Глобальный объект для доступа к функциям извне
  window.umGlobal = {};

  // Блок уведомлений
  umGlobal.showNotify = notify();

  // Попапы
  umGlobal.togglePopup = togglePopup();

  // Скролл к элементу
  umGlobal.scrollToTop = scrollToTop;

  // Функция для вывода ошибок поля
  umGlobal.showFieldError = showFieldError;

  // Поля формы, изменение позиции label в зависимости от наличия введенного текста
  // А так же убираем ошибку если она есть и мы вводим в поле данные
  umGlobal.inputLabelTranslate = inputLabelTranslate;
  inputLabelTranslate();

  // Скрытие/Отображение шапки при прокрутке
  // translateHeader();

  // Ссылка с вложенными интерактивными элементами
  // try {
  // 	(function() {
  // 		let $links = $('.js-container-link');

  // 		$links.each(function() {
  // 			let link = this;

  // 			$(link).on('click', function(e) {
  // 				console.log(e.target.tagName);
  // 				if(link != e.target && (e.target.tagName == 'A' || e.target.tagName == 'BUTTON')) {
  // 					e.preventDefault();
  // 					return false;
  // 				}

  // 				window.location.href = e.currentTarget.href;
  // 			});
  // 		});
  // 	})();
  // } catch (error) {
  // 	console.error(error);
  // }
});
