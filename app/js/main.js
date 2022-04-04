$(function() {
    $('.slider-inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


    $("body").on("click", "#burger", function() {
        $(".header__burger, .menu").toggleClass("active");
    });



});