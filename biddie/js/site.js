$(document).ready(function(){

	$('.menu-trigger a').click(function(e){
		e.preventDefault();

		$('.site-wrapper').toggleClass("show-nav");
		$(this).parent().toggleClass("show-nav");
	});

  var $container = $('.gallery');
// init
  $container.isotope({
    // options
    itemSelector: '.item'
  });

  $('#carousel-example-generic').carousel();

  $('.collapse').collapse();
});
