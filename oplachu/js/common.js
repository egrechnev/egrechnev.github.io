$(function() {

//--Navigation menu links (anchor)
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

//--Mobile menu
	// $('body').addClass('m-body');
	$('.burger-menu, nav a').click(function() {
		$('.m-nav').slideToggle(500);
		$('.m-body').toggleClass('no-scroll');
		$('.overlay').toggleClass('overlay-active');
		$('.burger-menu').toggleClass("menu-open");
	});

	if ($(window).width() > 975) {
		$("nav ul").removeAttr('style');
		$(".menu-wrap").removeClass('m-nav');
		$('.m-overlay').removeClass('overlay');
		$('.m-burger').removeClass('burger-menu');
	} else {
		$('body').addClass('m-body');
	}

	$(window).resize(function() {
		if ($(window).width() > 975) {
			$(".menu-wrap").removeAttr('style');
			$(".menu-wrap").removeClass('m-nav');
			$('.m-overlay').removeClass('overlay-active');
			$('.m-overlay').removeClass('overlay');
			$('body').removeClass('m-body');
			$('body').removeClass('no-scroll');
			$('.m-burger').removeClass("menu-open");
		} else {
			$(".menu-wrap").addClass('m-nav');
			$('.m-overlay').addClass('overlay');
			$('body').addClass('m-body');
			$('.m-burger').addClass('burger-menu');
		}
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
