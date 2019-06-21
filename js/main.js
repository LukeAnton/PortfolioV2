$(document).ready(function() {
  $(window).bind("scroll", function() {
    if (
      $(window).scrollTop() >=
      $("#about").offset().top +
        $("#landing").outerHeight() -
        window.innerHeight -
        161
    ) {
      $(".navbar-scroll").css("visibility", "visible");
    } else {
      $(".navbar-scroll").css("visibility", "hidden");
    }
  });
  // Cache selectors
  var lastId,
    topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight() + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: offsetTop
        },
        850
      );
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter('[href="#' + id + '"]')
        .parent()
        .addClass("active");
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
