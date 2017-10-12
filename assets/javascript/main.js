// var introEl = $('div.intro');
// var introHeadingH = introEl.find('h1').height();
// var windowH = $(window).height();

// introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');

(function ($) {
    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();

    // Grow and Shrink hr tag
    var $hr = $('#intro-line');
    setTimeout(function() {
    	$hr.css("width", "80%");
    }, 100);

    setTimeout(function() {
    	$hr.css("width", 0);
    }, 1200);

    // Delay fadein animation
    setTimeout(function() {
    	$('#intro-name').show().addClass('animated fadeInUp');
    	$('#intro-sub').show().addClass('animated fadeInDown');
    }, 800);
})(jQuery);