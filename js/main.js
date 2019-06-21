$(document).ready(function() {
  $(window).bind("scroll", function() {
    if (
      $(window).scrollTop() >=
      $("#about").offset().top +
        $("#landing").outerHeight() -
        window.innerHeight
    ) {
      $(".navbar-scroll").css("visibility", "visible");
    } else {
      $(".navbar-scroll").css("visibility", "hidden");
    }
  });

  // $(window).scroll(function() {
  //   console.log("hello");
  //   // Add parallax scrolling to all images in .paralax-image container
  //   $(".parallax-image").each(function() {
  //     // only put top value if the window scroll has gone beyond the top of the image
  //     if ($(this).offset().top < $(window).scrollTop()) {
  //       // Get ammount of pixels the image is above the top of the window
  //       let difference = $(window).scrollTop() - $(this).offset().top;
  //       // Top value of image is set to half the amount scrolled
  //       // (this gives the illusion of the image scrolling slower than the rest of the page)
  //       let half = difference / 2 + "px",
  //         transform = "translate3d( 0, " + half + ",0)";
  //
  //       $(this)
  //         .find("img")
  //         .css("transform", transform);
  //     } else {
  //       // if image is below the top of the window set top to 0
  //       $(this)
  //         .find("img")
  //         .css("transform", "translate3d(0,0,0)");
  //     }
  //   });
  // });
});
