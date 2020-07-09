$(function() {

    //Show side nav when hamburger clicked
    $(".hamburger").on("click", function() {
        $(".hamburger").addClass('hideHamburger');
        $("header ul").addClass('sideBar');
    });

    $("header ul").on("mouseleave", function() {
        $(".hamburger").removeClass('hideHamburger');
        $("header ul").removeClass('sideBar');
        
    });

    //Smooth Scroll
    $("header a").on("click", function(e) {
        e.preventDefault();
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
    })

});