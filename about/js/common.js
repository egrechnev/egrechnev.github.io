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
	$(".menu").on("click",".anchor", function (event) {
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

	$('.modal-close, .modal-bg, .overplay').click(function() {
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

//--amoCRM
	$('.amo-first').click(function() {
	   	$('.iframe-block').fadeIn(300);
	   	$('.overplay').fadeIn(300);
	});

    $('.amo-second').click(function () {
        $('.iframe-block2').fadeIn(300);
        $('.overplay').fadeIn(300);
    });

	$('.overplay').click(function() {
	   	$('.iframe-block').removeAttr('style');
	   	$('.iframe-block2').removeAttr('style');
	    $('.overplay').removeAttr('style');
	});



//--getQueryParam
var getQueryParam = function getQueryParam (param) {
  var queries = window.location.search, regex, resRegex, results, response;
  param = encodeURIComponent(param);
  regex = new RegExp('[\\?&]' + param + '=([^&#]*)', 'g');
  resRegex = new RegExp('(.*)=([^&#]*)');
  results = queries.match(regex);

  if (!results) {
      return '';
  }
  response = results.map(function (result) {
    var parsed = resRegex.exec(result);

    if (!parsed) {
        return '';
    }

    return parsed[2].match(/(^\d+$)/) ? Number(parsed[2]) : parsed[2];
  })

  return response.length > 1 ? response : response[0];
};


var mc_eid = getQueryParam('mc_eid');
var mc_cid = getQueryParam('mc_cid');


//--ajaxQuery
$.get('https://biztarget.ru/widgets/nikita/it_avtozadachi/index.php?_action=hook&uid=' + mc_eid + '&site=1&mc_cid=' + mc_cid);


//--authorization Link
function goToAuth(){
	window.open('/signin?uid=' + mc_eid + '&mc_cid=' + mc_cid, '_blank');
}