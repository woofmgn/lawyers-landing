import translateHeader from './modules/translateHeader';
import notify from './modules/notify';
import scrollToTop from './modules/scrollToTop';
import inputLabelTranslate from './modules/inputLabelTranslate';
import showFieldError from './modules/showFieldError';
import togglePopup from './modules/togglePopup';

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