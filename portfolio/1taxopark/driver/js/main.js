$(document).ready(function() {
  // To smoth scroll when putten on link
  $('.more-icon').click(function() {
    $('html, body').animate({
      scrollTop: $('#content').offset().top
    }, 1000);
  });  
});


/*

// scrollto
$(document).ready(function() {
  $("a.scrollto").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
});

//<a href="#content" class="scrollto">&#xf103;</a>

 //<section id="content"></section>

*/