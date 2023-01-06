export const togglePopup = (name, message) => {
	try {
        let $popups = $('.js-popup'),
            $overlay = $('.js-overlay');

        $popups.each(function() {
            let $popup = $(this),
                $closeBtn = $popup.find('.js-popup__close');

            $closeBtn.on('click', function() {
                togglePopup($popup.attr('data-popup-id'), false);
            });
        });

        $overlay.on('click', function() {
            $popups.each(function() {
                let $popup = $(this);

                if($popup.hasClass('is-visible')) togglePopup($popup.attr('data-popup-id'), false);
            });
        });

        return function(popupId, status = true, closeOverlay = true) {
            let $popup = $(`.js-popup[data-popup-id="${popupId}"]`);

            if(status) {
                $('html').css({overflow: 'hidden'});
                
                if(closeOverlay) $overlay.addClass('is-visible');
                $popup.addClass('is-visible');

                umGlobal.initAutoHeightTextarea();
            } else {
                if(closeOverlay) $overlay.removeClass('is-visible');
                $popup.removeClass('is-visible');

                setTimeout(function() {
                    $('html').css({overflow: ''});
                }, 300);
            }
        }
	} catch (error) {
		console.log(error)
	}
};