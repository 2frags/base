window.$ = jQuery;
window.jQuery = jQuery;
var mainmenu = '#mainmenu';
$.cachedScript = function( url, options ) {
    options = $.extend( options || {}, {dataType: "script",  cache: true, url: url});
    return jQuery.ajax( options );
};
$.cachedScript( "https://cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.js" ).done(function( script, textStatus ) {
    //console.log( textStatus );
    
    // $('._fl_menu').featherlight({
    //     targetAttr: 'data-sub',
    //     variant: '_sub',
    //     beforeOpen: function(event){
    //         var rootEl = $(event.target).parent().parent();
    //         this.root = rootEl;
    //         // console.log($(this.$currentTarget[0]).closest('.navbar').attr('class'));
    //         console.log($(event.target).parent().parent());
    //         //console.log(self);
    //     },
    //     // afterOpen: function(event){
    //     //     console.log(this); // this contains all related elements
    //     //     console.log(this.$currentTarget[0]); // this contains all related elements
    //     //     console.log(this.$content); // this contains all related elements
    //     //     console.log(this.targetAttr); // this contains all related elements
    //     //     //.attr('class')
    //     // },
    //     root: $(event).parent()
    //     //root: $(this.$currentTarget[0]).closest('.navbar').attr('class')
    // });

    // var testFn = function(e){
    //     console.log('xxxx');
    // }
    // function testFn(){
    //     console.log('xxxx');
    // }
  });
 
$(document).ready(function() {

    window.sideIn = function(event){
        $(event.$instance[0]).removeClass('fl_anim');
    };
    window.sideOut = function(event){
        $(event.$instance[0]).addClass('fl_anim');
    };

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
    //=============== js hamburger menu show-hide
    function mainmenu_pos($el) {
        console.log($el);
        $($el).each(function() {
            var target_menu = $(this).data('menu');
            if (target_menu) {
                $(this).is(':visible') ? $(target_menu).parent().addClass('js-menu_hide') : $(target_menu).attr('style', '').parent().removeClass('js-menu_hide js-menu_on');
            }
        });
        $('body').on('mouseup', $el, function(e) {
            e.stopPropagation();
            var target_menu = $(this).data('menu');
            var is_featherlight = $(this).data('featherlight');
            if (target_menu && !is_featherlight) {
                $(target_menu).slideToggle(300);
                $(target_menu).parent().toggleClass('js-menu_on');
            }

        });
    }
    mainmenu_pos('.js-menu-btn');

   
    //=============== tabs
    $('.tabs').on('click', ' dt:not(.on)', function() {
        $(this).addClass('on').siblings('dt').removeClass('on');
    })
})