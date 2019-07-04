$(document).ready(function() {
  $(window).bind("scroll", function() {
    if (
      $(window).scrollTop() >=
      $("#about").offset().top +
        $("#landing").outerHeight() -
        window.innerHeight -
        72
    ) {
      $(".navbar-scroll").css("visibility", "visible");
      $(".mainNav").css("visibility", "hidden");
    } else {
      $(".navbar-scroll").css("visibility", "hidden");
      $(".mainNav").css("visibility", "visible");
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

  $(
    'a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])'
  ).click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 72
          },
          1000
        );
        return false;
      }
    }
  });

  $(function() {
    $(" .b1, img1").hover(
      function() {
        $(".img1").addClass("blur");
      },
      function() {
        $(".img1").removeClass("blur");
      }
    );
  });
  $(function() {
    $(" .b2, img2").hover(
      function() {
        $(".img2").addClass("blur");
      },
      function() {
        $(".img2").removeClass("blur");
      }
    );
  });
  $(function() {
    $(" .b3, img3").hover(
      function() {
        $(".img3").addClass("blur");
      },
      function() {
        $(".img3").removeClass("blur");
      }
    );
  });
  $(function() {
    $(" .b4, img4").hover(
      function() {
        $(".img4").addClass("blur");
      },
      function() {
        $(".img4").removeClass("blur");
      }
    );
  });
  $(function() {
    $(" .b5, img5").hover(
      function() {
        $(".img5").addClass("blur");
      },
      function() {
        $(".img5").removeClass("blur");
      }
    );
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
