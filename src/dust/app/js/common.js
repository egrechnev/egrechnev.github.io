$(function() {
//fullpage.js
// var doFullpage = document.documentElement.clientWidth;
//   if (doFullpage > 576) {
    $('#fullpage').fullpage({
      lockAnchors: true,
      // anchors: ['s1', 's2', 's3', 's4', 's5', 's6'],
      navigation: true,
      navigationPosition: 'right',
      // scrollOverflow: true,
      responsiveWidth: 845,
      responsiveHeight: 640,
      responsiveSlides: true,
      // navigationTooltips: ['section1', 'section2','section3','section4',],
      // showActisveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      controlArrows:false,
      controlArrowColor: "#191919"
    });
// }

$(document).on('click', '#s5', function(){
  $.fn.fullpage.moveTo(5);
});

//OwlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dotsData: true,
    items:1
});

//Fake links
  var links = document.querySelectorAll('input[name=submit]');
  for(var i = 0; i < links.length; i++){
    links[i].onclick = confirmAway;
  }
  function confirmAway(e){
    e.preventDefault();
  }
});
