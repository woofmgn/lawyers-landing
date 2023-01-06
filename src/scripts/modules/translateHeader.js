export const translateHeader = () => {
	try {
		const header = document.querySelector('.js-header');

		let prevScroll = window.pageYOffset
		let currentScroll = window.pageYOffset;

		window.addEventListener('scroll', () => {
			const headerHidden = () => header.classList.contains('is-translated')

			currentScroll = window.pageYOffset

			if(currentScroll <= 100) {
				if(headerHidden()) header.classList.remove('is-translated');
				return false;
			}

			if (currentScroll > prevScroll && !headerHidden()) {
				header.classList.add('is-translated')
			}
			if (currentScroll < prevScroll && headerHidden()) {
				header.classList.remove('is-translated')
			}
			prevScroll = currentScroll
		})
	} catch (error) {
	  	console.log(error)
	}
};