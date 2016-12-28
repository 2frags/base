var mainmenu = '#mainmenu';
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
                $('#header').addClass("sticky");
            } else {
                $('#header').removeClass("sticky");
                $('#mainmenu li').removeClass("active");
            }
        }
        //================ js-hamburger
    function mainmenu_pos($el) {
        //$($el).is(':visible') ? $('body').addClass('js-menu') : $('body').removeClass('js-menu');
        $($el).each(function() {
            var target_menu = $(this).data('target');
            if (target_menu == mainmenu) {
                $(this).is(':visible') ? $('body').addClass('js-menu') : $('body').removeClass('js-menu');
            } else if (target_menu) {
                $(this).is(':visible') ? $(target_menu).parent().addClass('js-menu_hide') : $(target_menu).attr('style', '').parent().removeClass('js-menu_hide js-menu_on');
            }
        });

    }
    //=============== js-show_block
    $(document).on('mouseup', 'body.js-menu_on', function() {
        $(this).removeClass('js-menu_on');
    });
    $('#mainmenu').mouseup(function(e) {
        e.stopPropagation();
    });

    // $('.js-click_show').one('click', function() {
    //     $(this).addClass('hide');
    // })
    mainmenu_pos('.js-menu-btn');
    // mainmenu_pos('#mainmenu_toggle');

    // $('#mainmenu_toggle').click(function() {
    //     $('body').toggleClass('js-menu_on');
    // })

    $(window).resize(function() {
        mainmenu_pos('.js-menu-btn');
        $('body').removeClass('js-menu_on');
    })

    //=============== js hamburger menu
    $('.js-menu-btn').on('click', function() {
            var target_menu = $(this).data('target');
            //console.log(target_menu + ' ' + $('body').attr('class'));
            if (target_menu == mainmenu) {
                $('body').toggleClass('js-menu_on');
            } else if (target_menu) {
                $(target_menu).slideToggle(300);
                $(target_menu).parent().toggleClass('js-menu_on');
            }
        })
        //=============== tabs
    $('.tabs').on('click', ' dt:not(.on)', function() {
        $(this).next('dd').slideToggle(500);
        $(this).siblings('dt.on + dd').slideToggle(500);
        $(this).addClass('on').siblings('dt').removeClass('on');
    })
})