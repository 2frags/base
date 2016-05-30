$(document).ready(function(){
	//===============sticky header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10){
		    $('page_hdr').addClass("sticky");
	  	}
		  else{
		    $('page_hdr').removeClass("sticky");
	  	}
	});
	//================ js-hamburger
	function mainmenu_pos($el) {
		$($el).is(':visible') ? $('body').addClass('menu_fixed') : $('body').removeClass('menu_fixed');
	}


	mainmenu_pos('#mainmenu_toggle');

	$('#mainmenu_toggle').click(function(){
		$('body').toggleClass('menu_on');
	})

	$(window).resize(function() {
		mainmenu_pos('#mainmenu_toggle');
		$('body').removeClass('menu_on');
	})
	//================ tabs
	$('.tabs').on('click', 'li:not(.on)', function() {
		$(this)
      .addClass('on').siblings().removeClass('on')
      .parent('.tabs').next('.tabs_items').children().removeClass('on').eq($(this).index()).addClass('on');
			console.log($(this).index());
	});

})
