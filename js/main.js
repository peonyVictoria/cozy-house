$(function() {
	$('.our__items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
		responsive: [
			{
				breakpoint: 1166,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 827,
			settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});

	$('.btn__menu').on('click', function() {
		$('.menu').slideToggle();
	});

	document.addEventListener('click', function (e) {
		if (location.hash === '#open-modal-item-1') {
			if (!e.target.closest('.modal-dialog')) {
				location.hash = '#close';
			}
		}
	});

	document.addEventListener('click', function (e) {
		if (location.hash === '#open-modal-item-2') {
			if (!e.target.closest('.modal-dialog')) {
				location.hash = '#close';
			}
		}
	});

	document.addEventListener('click', function (e) {
		if (location.hash === '#open-modal-item-3') {
			if (!e.target.closest('.modal-dialog')) {
				location.hash = '#close';
			}
		}
	});

});