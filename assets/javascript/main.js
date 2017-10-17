(function ($) {
	var $hr = $('#intro-line'),
		$scrollDownAnchor = $('#intro-a'),
		$downArrow = $('.scrollDown'),
		contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

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

    // Delay fadein animation for scrollDown cursor
    setTimeout(function() {
        $('.scrollDown').removeClass('hide-me').addClass('active-me')
    }, 3000)

    // Fadeout content in intro page when scrolling down	   
    $(window).scroll(function() {
    	var $introH = $('#intro-content').height();
    	var scroll = $(window).scrollTop();
    	$('#intro-content').css({'opacity': (($introH-scroll)/$introH)});
    	$('.scrollDown').css({'opacity': (($introH-scroll)/$introH)});
    });

    // FadeIn navbar when scrolling down
    $(window).scroll(function() {
        if( $(this).scrollTop() >= $('#about-me').position().top / 4 ){
            $('#cd-vertical-nav').removeClass('hide-me').addClass('active-me')
        } else {
            $('#cd-vertical-nav').removeClass('active-me').addClass('hide-me')
        }
    })

    //smooth scroll to the second section
    $scrollDownAnchor.on('click', function(event){
    	event.preventDefault();
        smoothScroll($(this.hash));
    });

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });

    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

    // Smooth Scrolling
	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	1200, 'easeInOutExpo'
        );
	}

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

})(jQuery);