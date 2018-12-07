$(function() {

//--Header-sroll
	$(window).scroll(function () {
	    if ($(window).scrollTop() > 100) {
	        $("#header").addClass("small")
	    } else {
	        $("#header").removeClass("small")
	    }
	});

//--Navigation menu links (anchor)
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

//--Mobile menu
	$('.burger-menu').click(function() {
		$('.m-nav').slideToggle(400);
		$(this).toggleClass('menu-open');

		if (!$(this).hasClass('menu-open')) {
			$('#noscroll').scrollLock('disable');
			$('.overlay').fadeOut();
		} else {
			$('#noscroll').scrollLock('enable');
			$('.overlay').fadeIn();
			$('.menu-wrap').scrollLock('auto');
		}
	});

	$('nav a, nav .help, nav .btn').click(function() {
		$('.m-nav').slideToggle(0);
		$('.burger-menu').toggleClass('menu-open');

		if (!$('.burger-menu').hasClass('menu-open')) {
			$('#noscroll').scrollLock('disable');
			$('.overlay').fadeOut();
		}
	});

	if ($(window).width() > 975) {
		$('nav ul').removeAttr('style');
		$('.menu-wrap').removeClass('m-nav');
		$('.m-burger').removeClass('burger-menu');
	}

	$(window).resize(function() {
		if ($(window).width() > 975) {

			if ($('.burger-menu').hasClass('menu-open')) {
				$('#noscroll').scrollLock('disable');
				$('.overlay').fadeOut();
			}

			$('.menu-wrap').removeAttr('style');
			$('.menu-wrap').removeClass('m-nav');
			$('.m-burger').removeClass('menu-open');
		} else {
			$('.menu-wrap').addClass('m-nav');
			$('.m-burger').addClass('burger-menu');
		}
	});

//--NoScroll Modal
	$('.btn-modal').click(function() {
		$('#noscroll').scrollLock('enable');
		$('#result').scrollLock('auto');
	});

	$('.modal-close, .modal-bg').click(function() {
		$('#noscroll').scrollLock('disable');
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

//--button up
  	$(".logo img").click(function() {
    	$("html, body").animate({
      		scrollTop: "0"
    	}, 800)
  	});

//--OwlCarousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    // margin: 30,
	    // autoWidth: true,
	    autoplayHoverPause: true,
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


// scroll-lock

// ((w, d) => {

//   function ScrollLock() {

//     let options = {
//       selector: d.querySelector('html'),
//       lockStyles: `
//         overflow-y: scroll;
//         position: fixed;
//         width: 100%;
//       `,
//       lockClass: 'scroll-locked',
//     }

//     let prevScroll = {};
//     let prevStyle;

//     //
//     function toggle(userOptions = {}) {
//       options = { ...options, ...userOptions };
//       w.ScrollLock.isLocked ? _unlock() : _lock();
//     };

//     //
//     function _lock() {
//       w.ScrollLock.isLocked = !w.ScrollLock.isLocked;

//       prevStyle = options.selector.style.cssText;

//       prevScroll.top = w.pageYOffset || d.documentElement.scrollTop;
//       prevScroll.left = w.pageXOffset || d.documentElement.scrollLeft;

//       const lockPositionStyles = `
//         top: ${-prevScroll.top}px;
//         left: ${-prevScroll.left}px;
//       `;

//       options.selector.classList.add(options.lockClass);
//       options.selector.style.cssText = options.lockStyles + lockPositionStyles; 
//     };

//     //
//     function _unlock() {
//       w.ScrollLock.isLocked = !w.ScrollLock.isLocked;

//       options.selector.classList.remove(options.lockClass);
//       options.selector.style.cssText = prevStyle;

//       d.documentElement.scrollTop = prevScroll.top;
//       d.documentElement.scrollLeft = prevScroll.left;
//     };

//     //
//     return {
//       toggle,
//       isLocked: false
//     };
//   }

//   w.ScrollLock = ScrollLock();

// })(window, document);





// /****************************/


// window.addEventListener('scroll', function(e) {
//   const top = window.pageYOffset || document.documentElement.scrollTop;
//   console.log('top:', top);
// });

// document.addEventListener('DOMContentLoaded', function(e) {
//   const button = document.querySelector('.burger-menu');

//   button.addEventListener('click', function(e) {
//     e.preventDefault();
//     window.ScrollLock.toggle({ lockClass: 'custom-lock-class' });
//   });
// });
