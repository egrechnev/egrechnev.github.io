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

//Fake links
  var links = document.querySelectorAll('a[data-fake-link], input[name=submit]');
  for(var i = 0; i < links.length; i++){
    links[i].onclick = confirmAway;
  }
  function confirmAway(e){
    return false;
  }
});
