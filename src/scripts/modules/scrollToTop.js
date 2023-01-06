export const scrollToTop = () => {
	try {
        // Скролл к элементу
        $([document.documentElement, document.body]).animate({
            scrollTop: $elementToScroll.offset().top - 200
        }, 800);
	} catch (error) {
		console.log(error)
	}
};