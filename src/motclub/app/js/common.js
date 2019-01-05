$(function() {

//--Materialize
	$('.sidenav').sidenav();

	$('.modal').modal();

	$('.materialboxed').materialbox();

//--OwlCarousel
	$('.about__slides').owlCarousel({
	    // animateOut: 'slideOutDown',
	    // animateIn: 'flipInX',
		items:1,
	    loop:true,
	    dots:false,
	    nav:true
	});

	$('.services__slides').owlCarousel({
	    loop:true,
	    margin:60,
	    dots:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        992:{
	            items:2
	        },
	    }
	});

	$('.listings__slides').owlCarousel({
	    loop:true,
	    // margin:30,
	    dots:false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        700:{
	            items:2
	        },
	        1093:{
	            items:3
	        },
	        1321:{
	            items:4
	        },
	    }
	});

//--Navigation menu links
	$('.menu').on('click','a', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

//--logo up
  	$(".footer-logo .logo img").click(function() {
    	$("html, body").animate({
      		scrollTop: "0"
    	}, 800)
  	});

//--Fake links
	$('a[data-fake-link], button[name=submit]').click(function(e){
		e.preventDefault();
	});

});