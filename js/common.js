$(document).ready(function() {
	//show menu on icon click
	$('.menu_icon').on('click', function(){
		$('.main_menu').slideToggle();
	});
// set active menu item & remove menu
	$('.main_menu li').on('click', function(){
		if($('.menu_icon').is(':visible')){
			$('.main_menu').slideUp();
		};
		$('.main_menu li').removeClass('active');
		$(this).addClass('active');
		$('.catalog_category_name').text($('.main_menu li.active').text());
	})
	
	$('.search_button').on('click', function(){
		$('.header_search').slideToggle();
	});

	$('.filter_select').on('click','.filter_placeholder',function(){
		var parent = $(this).closest('.filter_select');
		if ( ! parent.hasClass('is-open')){
			parent.addClass('is-open');
			$('.filter_select.is-open').not(parent).removeClass('is-open');
		}else{
			parent.removeClass('is-open');
		}
	}).on('click','ul>li',function(){
		var parent = $(this).closest('.filter_select');
		parent.removeClass('is-open').find('.filter_placeholder').text( $(this).text() );
		parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	});
	$('.catalog_category_name').text($('.main_menu li.active').text());

	$('.filter_icon').on('click', function(){
		$('.filter_wrapper').addClass('active');
	})
	$('.filter_close').on('click', function(){
		$('.filter_wrapper').removeClass('active');
	});

});