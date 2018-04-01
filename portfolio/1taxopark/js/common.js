$(function() {
  //SVG Fallback
  // if (!Modernizr.svg) {
  //   $("img[src*='svg']").attr("src", function() {
  //     return $(this)
  //       .attr("src")
  //       .replace(".svg", ".png");
  //   });
  // }

  // hide scrollbar when open the Modal window
  $(".bonus a, .contract a, .vacancies a").click(function() {
    $("body").addClass("no-scroll");
  });

  $(".close").click(function() {
    $("body").removeClass("no-scroll");
  });

  //E-mail Ajax Send
  $("#mail_contract").submit(function() {
    $(".contract-submit").addClass("loading");
    var msg = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php",
      data: msg.serialize()
    }).done(function() {
      window.location.href = "#mail-sent";
      // $(msg).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      // alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        // $(msg).find('.success').removeClass('active').fadeOut();
        msg.trigger("reset");
        $(".contract-submit").removeClass("loading");
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch (err) {}

  $("img, a").on("dragstart", function(event) {
    event.preventDefault();
  });
});
