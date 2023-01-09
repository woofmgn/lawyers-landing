import Swiper from "swiper/bundle";
import { inputLabelTranslate } from "./modules/inputLabelTranslate.js";
import { notify } from "./modules/notify.js";
import { scrollToTop } from "./modules/scrollToTop.js";
import { showFieldError } from "./modules/showFieldError.js";
import { togglePopup } from "./modules/togglePopup.js";
import { translateHeader } from "./modules/translateHeader.js";

const swiperTeam = new Swiper(".um-team__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".um-team__swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".um-team__swiper-btn_type_next",
    prevEl: ".um-team__swiper-btn_type_prev",
  },
});

swiperTeam.slideNext();

const swiperCertificate = new Swiper(".um-certificate__swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".um-certificate__swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".um-certificate__swiper-btn_type_next",
    prevEl: ".um-certificate__swiper-btn_type_prev",
  },
});

swiperCertificate.slideNext();

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
  translateHeader();

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
