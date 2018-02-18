$(document).ready(function() {
  // button up
  $(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height()) {
      $(".up").fadeIn(500)
    } else {
      $(".up").fadeOut(500)
    }
  });
  $(".up").click(function() {
    $("html, body").animate({
      scrollTop: "0"
    }, 800)
  });
});  
