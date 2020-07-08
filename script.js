$(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').hide();
        $('header ul').fadeIn();
    });
    $('header ul').on('click', function() {
        $('.hamburger').show();
        $('header ul').hide();
        
    });


});