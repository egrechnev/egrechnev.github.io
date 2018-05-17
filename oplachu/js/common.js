$(function() {

//--Navigation menu links
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

//--OwlCarousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    margin: 30,
	    autoplayHoverPause: true,
	    // autoWidth: true,
	    nav:true,
	    items:3,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

});
