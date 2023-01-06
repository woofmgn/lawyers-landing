export const inputLabelTranslate = () => {
	try {
        let $items = $('.js-input');

        $items.each(function() {
            let $this = $(this),
                $input = $this.find('.js-input__input, textarea');

            ['keypress.checkempty', 'input.checkempty'].forEach(event => {
                $input.off(event);
            });
            ['keypress.checkerror', 'input.checkerror'].forEach(event => {
                $input.off(event);
            });

            $input.on('focus.checkempty', function() {
                $this.removeClass('is-empty');
            });
            $input.on('blur.checkempty', function() {
                if($input.val() == '') $this.addClass('is-empty');
            });

            ['keypress.checkempty', 'input.checkempty'].forEach(event => {
                $input.on(event, function() {
                    $this.removeClass('is-empty');
                });
            });
            
            ['keypress.checkerror', 'input.checkerror'].forEach(event => {
                $input.on(event, function() {
                    if($this.hasClass('is-error')) $this.removeClass('is-error')
                });
            });
            
            if($input.val() == '') $this.addClass('is-empty');
            else $this.removeClass('is-empty');
        });
	} catch (error) {
		console.log(error)
	}
};