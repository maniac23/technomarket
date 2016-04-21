$(document).ready(function() {
	$('.menu_icon').on('click', function(){
		$('.main_menu').slideToggle();
	});

	$('.main_menu li').on('click', function(){
		$('.main_menu').slideUp();
		$('.main_menu li').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.search_button').on('click', function(){
		$('.header_search').slideToggle();
	})
});