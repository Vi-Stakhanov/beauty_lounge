$(document).ready(function() {

	$('.btn-fav').click(function() {
        $(this).toggleClass('active');
    });

    $('.btn-search-mob').click(function(){
        $(this).toggleClass('active');
        $('.search-drop').toggle();
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.nav-mob').toggle();
    });

    //$('.nav-mob .open-1').click(function() {
        //event.preventDefault();

        //$('.nav-mob__level-1').toggle();

    //});

    $('.nav-mob .open-1').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-1').hide();
      var openid_1 = $(this).data('openid_1');
        $('#' + openid_1).fadeIn();
    });

    $('.level-back-1').click(function(){
        $('.nav-mob__level-1').fadeIn();
        $('.nav-mob__level-2').hide();
    });

    $('.nav-mob .open-2').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-2').hide();
      var openid_2 = $(this).data('openid_2');
        $('#' + openid_2).fadeIn();
    });

    $('.level-back-2').click(function(){
        $('.nav-mob__level-2').fadeIn();
        $('.nav-mob__level-3').hide();
    });

    $('.products-slider-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            } 
        ]
    });

    $('.products-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        appendArrows: $('#arrows-append_1'),
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            } 
        ]
    });

    $('.accii-slider-1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        appendArrows: $('#arrows-append_2'),
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 1
              }
            } 
        ]
    });

    $('.accii-slider-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        appendArrows: $('#arrows-append_3'),
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 1
              }
            } 
        ]
    });

    $('.products-slider-3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            } 
        ]
    });

    $('.mask').mask('+7 (999) 999-99-99');
          

});