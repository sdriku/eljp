// Preloader js
function preloader() {
	$('.preloader').delay(100).fadeOut(10);
}
$(preloader);
$(document).on("turbolinks:load", preloader);


(function ($) {
	'use strict';

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		infinite: true,
		autoplaySpeed: 10000,
		arrows: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i><img height="40px" width="40px" src="assets/img/icons8-u-turn-to-left-90.png" alt="précédent"/></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i><img height="40px" width="40px" src="assets/img/icons8-u-turn-to-right-90.png" alt="suivant"/></i></button>',
		dots: true,
		customPaging: function (slider, i) {
			var icon = $(slider.$slides[i]).data('icon');
			var text = $(slider.$slides[i]).data('text');
			return '<a><i class="' + icon + '"></i><span>' + text + '</span></a>';
		},
		responsive: [{
			breakpoint: 576,
			settings: {
				autoplay: false,
				arrows: false
			}}{
			breakpoint: 900,
			settings: {
				autoplay: false
			}
		}]
	});
	$('.hero-slider').slickAnimation();


	// animation scroll js
	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 90
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	// back to top button
	$('.back-to-top').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
	});

	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).on('scroll', function () {
		counter();
	});

})(jQuery);
