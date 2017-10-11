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
})(jQuery);