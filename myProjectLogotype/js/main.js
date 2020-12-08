$(function() {
	
	$('.slider__content , .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	}); 
		
	
	$('select').styler();

	// This code for menu bars
	$('.header__btn-menu').on('click', function(){
		$('.menu .menu__items').slideToggle();
	});
});