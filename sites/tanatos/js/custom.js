$(document).ready(function() {
  // Burger
  $(".burger-menu").click(function () {
          $(this).toggleClass("menu-on");
          $(this).closest("body").toggleClass("active");
  });

///////////////
// $(".bm").click(function(){
//  $(this).closest("body").toggleClass("active");
// });
//////////////
  $('#header-section .sub-menu .link-to-services').click(function() {
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    }, 1000);
  });
  $('#header-section .sub-menu .link-to-our-works').click(function() {
    $('html, body').animate({
      scrollTop: $('#our-works').offset().top
    }, 1000);
  });
    $('#header-section .sub-menu .link-to-hire-us').click(function() {
    $('html, body').animate({
      scrollTop: $('#our-team').offset().top
    }, 1000);
  });
      $('#header-section .sub-menu .link-to-reviews').click(function() {
    $('html, body').animate({
      scrollTop: $('#reviews').offset().top
    }, 1000);
  });
  $('#header-section .sub-menu .link-to-say-hello').click(function() {
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top
    }, 1000);
  });
//////////////

  // To smoth scroll when putten on link
  $('#header-section .more span').click(function() {
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    }, 1000);
  });
  $('#header-section .btns .hire-us').click(function() {
    $('html, body').animate({
      scrollTop: $('#our-team').offset().top
    }, 1000);
  });
  $('#header-section .btns .our-works').click(function() {
    $('html, body').animate({
      scrollTop: $('#our-works').offset().top
    }, 1000);
  });
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
  // show more button
  $('.show-more').click(function() {
    $('.hidden-more').fadeIn(1000);
  });

  // $('.show-more').click(function(e) {
  //     var btnLabel = $('.hidden-more')
  //         .toggle()
  //         .is(':visible')
  //         ? 'HIDE' : 'SHOW MORE';
  //     $(e.target).text(btnLabel);
  // });

  // check reviews
  var leftarrow = $('.arrow-left'),
    rightarrow = $('.arrow-right');

  function chickClients() {
    if ($('.review:first').hasClass('active')) {
      leftarrow.fadeOut();
    } else {
      leftarrow.fadeIn();
    }
    if ($('.review:last').hasClass('active')) {
      rightarrow.fadeOut();
    } else {
      rightarrow.fadeIn();
    }
  }
  chickClients();
  $('#reviews span').click(function() {
    if ($(this).hasClass('arrow-right')) {
      $('#reviews .active').fadeOut(200, function() {
        $(this).removeClass('active').next('.review').addClass('active').fadeIn();
        chickClients();
      });
    } else {
      $('#reviews .active').fadeOut(200, function() {
        $(this).removeClass('active').prev('.review').addClass('active').fadeIn();
        chickClients();
      });
    }
  });

    //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  }

//Fake links
  var links = document.querySelectorAll('a[data-fake-link], input[name=submit]');
  for(var i = 0; i < links.length; i++){
    links[i].onclick = confirmAway;
  }
  function confirmAway(e){
    return false;
  }
});
