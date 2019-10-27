$(document).ready(function () {

    /*      open serch-form         */

    $('#search_1').on('click', function () {
        $('#search-form_1').slideToggle(600);
    });

    $('#search_2').on('click', function () {
        $('#search-form_2').slideToggle(600);
    });

    $('#search_3').on('click', function () {
        $('#search-form_3').slideToggle(600);
    });

    /*      end open serch-form         */

    var link = $('.mobile-link');
    var menu = $('.header-menu_mobile');
    var navLink = $('.header-menu_mobile ul li a');

    link.click(function () {
        link.toggleClass('mobile-link_active');
        menu.slideToggle( "slow", function() {
    // Animation complete.
  });
    });

    navLink.click(function () {
        link.toggleClass('mobile-link_active');
        menu.slideToggle( "slow", function() {
    // Animation complete.
  });
    });
});