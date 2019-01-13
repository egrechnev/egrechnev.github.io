$(function() {

//----Portfolio |- start ->
//
//--Sort - https://www.kunkalabs.com/mixitup/
var mixer = mixitup('.portfolio_grid');

//--Add class="active"
$(".s_portfolio li").click(function(){
	$(".s_portfolio li").removeClass("active");
	$(this).addClass("active");
});

//--Popup descr - http://dimsemenov.com/plugins/magnific-popup/
$('.popup_content').magnificPopup({
  type:'inline',
  midClick: true,

//--Add class 'mfp-fade' for <--Animation-->
  removalDelay: 300,
//--Class that is added to popup wrapper and background
  mainClass: 'mfp-fade'
});

//ID--for link and descr
$(".portfolio_item").each(function(i){
	$(this).find(".popup_content").attr("href", "#work_" + i);
	$(this).find(".portfolio_descr").attr("id", "work_" + i);
});
//
//---- Portfolio <- end -|

//--Navigation menu links
$(".drawer-list a").click(function() {
  $(".click-close").click();
});

$(".drawer-list, .menu").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор блока с атрибута href
	var id  = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

	//анимируем переход на расстояние - top за 500 мс
	$('body,html').animate({scrollTop: top}, 500);
});

//--Headroom
$("#header").headroom({
	"offset": 5,//450
	"tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});

//--Background change
// $(window).scroll(function(){
//     if ($(window).scrollTop() > 480 ){
//         $(".header").css("background", "#1179bf");
//     }else{
//     	$(".header").css("background", "#ffffff");
//     }
// });

//-Parallax--start->
// $(window).scroll(function(e){
//   parallax();
// });

// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('.background').css('top',-(scrolled*0.15)+'px');
// }
//-Parallax--end-|

//--jqBootstrapValidation
// $("input, select, textarea").jqBootstrapValidation();


//--E-mail Ajax Send - phpmailer
$("#form_contacts").submit(function() {
  $(".contacts-submit").addClass("loading");
  var msg = $(this);
  $.ajax({
    type: "POST",
    url: "../mail.php",
    data: msg.serialize()
  }).done(function() {
    // window.location.href = "#contacts";
    	// $(msg).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
    	$(msg).find('.success').css('display', 'flex').hide().fadeIn();
    // alert("Сообщение отправлено!");
    setTimeout(function() {
      // Done Functions
      // $(msg).find('.success').removeClass('active').fadeOut();
      $(msg).find('.success').fadeOut();
      msg.trigger("reset");
      $(".contacts-submit").removeClass("loading");
    }, 2000);
  });
  return false;
});



//--usebasin.com - START -->
//E-mail Ajax Send - recaptcha//
// $(".form_contacts").submit(function() {

//   var captchResponse = $('#g-recaptcha-response').val();
//   if(captchResponse.length == 0 ) {
//     $('.robot-text').fadeIn();
//     return false;

//   } else {

//   $(".contacts-submit").addClass("loading");
//   var msg = $(this);
//   $.ajax({
//     type: "POST",
//     url: "https://usebasin.com/f/2c02fde4c819",
//     data: msg.serialize()
//   }).done(function() {
//       $(msg).find('.success').css('display', 'flex').hide().fadeIn();
//       setTimeout(function() {
//         $(msg).find('.success').fadeOut();
//         msg.trigger("reset");
//         $(".contacts-submit").removeClass("loading");
//       }, 2200);
//       $('.robot-text').fadeOut();
//       grecaptcha.reset();
//   });

//   return false;
// };

// });
//|--usebasin.com - END


//--Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {
	// }

/* Scroll to effect Animate.css -> start */

(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

		jQuery(window).scroll(function(event) {

		  jQuery(".animate").each(function(i, el) {
			var el = jQuery(el);
			if (el.visible(true)) {
			  el.addClass("start");
			}
		  });

		});
/* Scroll to effect Animate.css -> end */

});