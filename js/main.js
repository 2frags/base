window.$ = jQuery;
window.jQuery = jQuery;
var mainmenu = '#mainmenu';
$.cachedScript = function( url, options ) {
    options = $.extend( options || {}, {dataType: "script",  cache: true, url: url});
    return jQuery.ajax( options );
};
$.cachedScript( "https://cdn.rawgit.com/noelboss/featherlight/1.7.6/release/featherlight.min.js" ).done(function( script, textStatus ) {
    console.log( textStatus );
    
    $('._fl_menu').featherlight({
        targetAttr: 'data-sub',
        variant: '_sub',
        afterOpen: function(event){
            console.log(this); // this contains all related elements
            console.log(this.$currentTarget[0]); // this contains all related elements
            console.log(this.targetAttr); // this contains all related elements
        },
        root: $(this).parent()
        // root: '#panel1'
    });
  });

var featherlight_sub = {
    //root: $(this).closest('.navbar'),
    variant: '_sub',
	afterOpen: function(event){
        console.log(this); // this contains all related elements
    },
    onResize: function(event){
        console.log(this); // this contains all related elements
    }
};
$(document).ready(function() {
    // $('#test').featherlight('#menu2');
    // $('[data-sub]').featherlight($(this).attr('data-sub'), featherlight_sub);
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
   
    //=============== tabs
    $('.tabs').on('click', ' dt:not(.on)', function() {
        $(this).addClass('on').siblings('dt').removeClass('on');
    })
})