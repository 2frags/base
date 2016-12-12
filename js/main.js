$(document).ready(function() {
    //===============sticky header
    var scrollTimeout;
    scrolled = 0;
    $(window).scroll(function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 150);
    });
    scrollHandler = function() {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
                $('#mainmenu li').removeClass("active");
            }
        }
        //================ js-hamburger
    function mainmenu_pos($el) {
        $($el).is(':visible') ? $('body').addClass('menu_fixed') : $('body').removeClass('menu_fixed');
    }
    //=============== js-show_block
    $(document).on('mouseup', 'body.menu_on', function() {
        $(this).removeClass('menu_on');
        console.log('body');
    });
    $('#mainmenu').mouseup(function(e) {
        e.stopPropagation();
        console.log('mainmenu');
    });

    $('.js-click_show').one('click', function() {
        $(this).addClass('hide');
    })

    mainmenu_pos('#mainmenu_toggle');

    $('#mainmenu_toggle').click(function() {
        $('body').toggleClass('menu_on');
    })

    $(window).resize(function() {
            mainmenu_pos('#mainmenu_toggle');
            $('body').removeClass('menu_on');
        })
        //=============== tabs
    $('.tabs dt').click(function() {
            $(this).addClass('on').siblings('dt').removeClass('on');
        })
        //============== menu
        // $('#mainmenu a').click(function(e){
        // 	$(this).closest('li').addClass('active').siblings('li').removeClass('active');
        // 	e.preventDefault();
        // 	nmbr = $(this).closest('li').index();
        // 	moveto = $(this).attr('href');
        // 	$('html, body').animate({
        //        scrollTop: $(moveto ).offset().top
        //    }, 600);
        // 	scrolled = 1;
        //    return false;
        // });


})