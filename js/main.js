window.$ = jQuery;
window.jQuery = jQuery;
var mainmenu = '#mainmenu';
$.cachedScript = function( url, options ) {
    options = $.extend( options || {}, {dataType: "script",  cache: true, url: url});
    return jQuery.ajax( options );
};
// $.cachedScript( "https://cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.js" ).done(function( script, textStatus ) {
    $.cachedScript( "https://gitcdn.xyz/cdn/noelboss/featherlight/aca473f3a99dacd36c290dda1792a4f70c48996f/release/featherlight.min.js" ).done(function( script, textStatus ) {
        $.cachedScript( "https://gitcdn.xyz/cdn/noelboss/featherlight/aca473f3a99dacd36c290dda1792a4f70c48996f/release/featherlight.gallery.min.js" ).done(function( script, textStatus ) {
            //console.log( textStatus );
            
        });
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
//   $.cachedScript( "https://cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.gallery.min.js" ).done(function( script, textStatus ) {});
  
  
 
$(document).ready(function() {
    if ($(window).scrollTop() > 10) {
        $('#header').addClass("sticky");
    }
    //======================== featherlight open/close animation
    window.sideIn = function(event){
        $(event.$instance[0]).removeClass('fl_anim');
    };
    window.sideOut = function(event){
        $(event.$instance[0]).addClass('fl_anim');
    };
    window.closeFL = function(){
        var current = $.featherlight.current();
        current.close();
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
        $($el).each(function() {
            var is_featherlight = $(this).data('featherlight');
            if (is_featherlight) {
                // console.log( $(is_featherlight).is(':visible'));
                $(is_featherlight).is(':visible') ? $(this).addClass('xx-hide') : $(this).removeClass('xx-hide');
            }
        });
    }
    mainmenu_pos("[data-featherlight][class*='menu']");

    $(window).resize(function() {
        mainmenu_pos("[data-featherlight][class*='menu']");
        if(window.$.featherlight){
            window.$.featherlight.close(); 
        }
        
    })

   
    //=============== tabs
    $('.tabs').on('click', ' dt:not(.on)', function() {
        $(this).addClass('on').siblings('dt').removeClass('on');
    })
})