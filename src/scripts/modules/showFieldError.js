export const showFieldError = (name, message) => {
	try {
        let $input = $(`input[name="${name}"], textarea[name="${name}"]`),
            $inputBlock = $input.closest('.js-input'),
            $error = $inputBlock.find('.js-input__error');

        $inputBlock.addClass('is-error');

        if($error.length == 0) $inputBlock.append($(`<div class="um-input__error js-input__error">${message}</div>`));
        else $error.text(message);
	} catch (error) {
		console.log(error)
	}
};