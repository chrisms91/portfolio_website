(function ($) {

    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();

    //Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            // console.log(data.curTop);
        }
    });

    // Grow hr tag
    var $hr = $('#intro-line');
    setTimeout(function() {
    	$hr.css("width", "80%");
    }, 100);

    // Shrink hr tag back to 0
    setTimeout(function() {
    	$hr.css("width", 0);
    }, 1200);

    // Delay fadein animation for intro page
    setTimeout(function() {
    	$('#intro-name').show().addClass('animated fadeInUp');
    	$('#intro-sub').show().addClass('animated fadeInDown');
    }, 800);

    // Fadeout content in intro page when scrolling down	   
    $(window).scroll(function() {
    	var $introH = $('#intro-content').height();
    	var scroll = $(window).scrollTop();
    	$('#intro-content').css({'opacity': (($introH-scroll)/$introH)});
    });

    //add animate on scrolldown arrow
    setTimeout(function() {
    	$('.scrollDown').addClass('animated flash infinite');
    }, 4500);

})(jQuery);