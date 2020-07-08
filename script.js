$(function() {
    //Show side nav when hamburger clicked
    $(".hamburger").on("click", function() {
        $(".hamburger").hide();
        $("header ul").fadeIn();
    });

    // $("header ul").on("click", function() {
    //     $(".hamburger").show();
    //     $("header ul").hide();
        
    // });

    //Smooth Scroll
    $("a").on("click", function(e) {
        e.preventDefault();
        const value = $(this).attr("value");
        let target;
        if (value === "about") {
            target = ".about";
        } else if (value === "portfolio") {
            target = ".portfolio";
        } else if (value === "contact") {
            target = ".contact";
        }

        $("html, body").animate(
            {
              scrollTop: $(target).offset().top,
            },
            "slow"
          );
    })


});