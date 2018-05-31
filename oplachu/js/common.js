$(function() {

//--Navigation menu links (anchor)
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});


//--Mobile menu
	$('.burger-menu, nav a, nav .help, nav .btn').click(function() {
		$('.m-nav').slideToggle(500);
		$('.m-body').toggleClass('no-scroll');
		$('.overlay').toggleClass('overlay-active');
		// $('.translucent').fadeIn();
		// $('.translucent').fadeOut();
		$('.burger-menu').toggleClass("menu-open");
	});


            // $('.clickme').click(function(e){
            //     $('.translucent, .popup').fadeIn(500);
            //     $('body').css({
            //         'overflow-y': 'hidden',
            //         'position': 'relative',
            //     });
            //     e.preventDefault();
            //     $(document).on('touchmove',function(e){
            //       e.preventDefault();
            //     });
            // });

	$('.btn, .terms-of-use').click(function() {
		$('#noscroll').scrollLock('enable');
		$('#result').scrollLock('auto');
	});

	$('.modal-close, .modal-bg').click(function() {
		$('#noscroll').scrollLock('disable')
	});



	// if ($(window).width() > 576) {
	// 	$('.terms-of-use').click(function() {
	// 		$('body').addClass('no-scroll-modal');
	// 		$('body').css('padding-right','17px');
	// 	});

	// 	$('.modal-terms-close .btn, .modal-bg').click(function() {
	// 		$('body').removeClass('no-scroll-modal');
	// 		$('body').removeAttr('style');
	// 	});
	// } else {
	// 	$('.terms-of-use').click(function() {
	// 		$('body').addClass('no-scroll-modal');
	// 	});
	// 	$('.modal-terms-close .btn, .modal-bg').click(function() {
	// 		$('body').removeClass('no-scroll-modal');
	// 	});
	// }

	if ($(window).width() > 975) {
		$("nav ul").removeAttr('style');
		$('.menu-wrap').removeClass('m-nav');
		$('.m-overlay').removeClass('overlay');
		$('.m-burger').removeClass('burger-menu');
	} else {
		$('body').addClass('m-body');
	}

	$(window).resize(function() {
		if ($(window).width() > 975) {
			$('.menu-wrap').removeAttr('style');
			$('.menu-wrap').removeClass('m-nav');
			$('.m-overlay').removeClass('overlay-active');
			$('.m-overlay').removeClass('overlay');
			$('body').removeClass('m-body');
			$('body').removeClass('no-scroll');
			$('.m-burger').removeClass("menu-open");
		} else {
			$('.menu-wrap').addClass('m-nav');
			$('.m-overlay').addClass('overlay');
			$('body').addClass('m-body');
			$('.m-burger').addClass('burger-menu');
		}
	});


//--Modal window DONE
	$('.modal-get .btn').click(function() {
		$('.modal-get .not-done').slideToggle(500);
		$('.modal-get .done').slideToggle(500);
	});

	$('.modal-send .btn').click(function() {
		$('.modal-send .not-done').slideToggle(500);
		$('.modal-send .done').slideToggle(500);
	});

//--OwlCarousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    // margin: 30,
	    autoplayHoverPause: true,
	    // autoWidth: true,
	    nav:true,
	    items:3,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    }
	});

});
