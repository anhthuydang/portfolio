$(function() {

    // Show side nav when hamburger clicked
    $(".hamburger").on("click", function() {
        $(".hamburger").addClass('hideHamburger');
        $("header ul").addClass('sideBar');
    });
    //Hide side bar
    $(".exitButton").on("click", function() {
        $("header ul").removeClass('sideBar');
        $(".hamburger").removeClass('hideHamburger');

    })

    //Smooth Scroll
    $("header a").on("click", function(e) {
        e.preventDefault();
        $('header ul').removeClass('sideBar');
        const value = $(this).attr("value");
        let target;
        if (value === "home") {
            target = "header";
        } else if (value === "about") {
            target = ".about";
        } else if (value === "portfolio") {
            target = ".portfolio";
        } else if (value === "contact") {
            target = ".contact";
        };

        $("html, body").animate(
            {
              scrollTop: $(target).offset().top,
            },
            "slow"
          );

          $('header ul').removeClass('sideBar');
          $(".hamburger").removeClass('hideHamburger');

    })

});