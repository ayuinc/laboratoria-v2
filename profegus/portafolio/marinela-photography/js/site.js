$(document).ready(function(){

	$('.menu-trigger a').click(function(e){
		e.preventDefault();

		$('.site-wrapper').toggleClass("show-nav");
		$(this).parent().toggleClass("show-nav");
	});

  var $container = $('.isotope-container');
  $container.isotope({
    // options
    itemSelector: '.isotope-item'
  });

});