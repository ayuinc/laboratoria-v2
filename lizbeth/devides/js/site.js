$(document).ready(function(){

	$('.menu-trigger a').click(function(e){
		e.preventDefault();

		$('.site-wrapper').toggleClass("show-nav");
		$(this).parent().toggleClass("show-nav");
	});

	$('.img-container li a').click(function(e){
		e.preventDefault();
		$('body').addClass("overflow-hidden");
		$('.img-slider-modal').removeClass("hidden");
	});

	$('.img-slider-modal a.close').click(function(e){
		e.preventDefault();
		$('.img-slider-modal').addClass("hidden");
		$('body').removeClass("overflow-hidden");
	});

});