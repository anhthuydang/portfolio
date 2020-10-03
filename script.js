$(function() {
    //typeIt effect
    new TypeIt("#typeIt", {
        speed: 40,
        loop: true,
        startDelay: 500,
        deleteSpeed: 40
    })
    .type("Web Developer", {delay: 2000})
    .delete(null, {delay: 1000})
    .type("Coder", {delay: 2000})
    .delete(null, {delay: 1000})
    .type("Problem Solver", {delay: 2000})
    .delete(null, {delay: 1000})
    .type("Team Player", {delay: 2000})
    .delete(null, {delay: 1000})
    .go();

    // Show side nav when hamburger clicked
    $(".hamburger").on("click", function(e) {
        $(".hamburger").addClass('hideHamburger');
        $("header ul").addClass('sideBar');
        e.stopPropagation();
    });
    //Hide side bar
    $("html").on("click", function() {
        $("header ul").removeClass('sideBar');
        $(".hamburger").removeClass('hideHamburger');
    });
    //Hide side bar by Escape key for accessibility
    $("html").on("keydown", function(e) {
        if (e.key.includes("Escape")) {
            $("header ul").removeClass('sideBar');
            $(".hamburger").removeClass('hideHamburger');
        }
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