$(document).ready(function() {
    $('.select_1').select2({
        minimumResultsForSearch: -1
    });

    $('.select_2').select2({
        minimumResultsForSearch: -1
    });

    $('.select_3').select2({
        minimumResultsForSearch: -1
    });

    $('.select_4').select2({
        minimumResultsForSearch: -1
    });

	$('.btn-fav').click(function() {
        $(this).toggleClass('active');
    });

    $('.btn-search-mob').click(function(){
        $(this).toggleClass('active');
        $('.search-drop').toggle();
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.menu-mob').toggle();
        $('.sorting-drop').toggleClass('header');
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
        $('.menu-mob .header__place').hide();
        $('.menu-mob .bottom').hide();
    });

    $('.level-back-1').click(function(){
        $('.nav-mob__level-1').fadeIn();
        $('.nav-mob__level-2').hide();
        $('.menu-mob .header__place').fadeIn();
        $('.menu-mob .bottom').fadeIn();
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

    $('.btn-sorting').click(function(){
        $(this).toggleClass('active');
        $('.sorting-drop').toggleClass('active');
    });

    $('.btn-filter, .filter-close').click(function(){
        $(this).toggleClass('active');
        $('.filter').toggleClass('active');
        $('.header').toggleClass('hide');

    });

    $('.btn-products-add').on('click', function() {
        $('.add').fadeIn(); // плавное появление

        setTimeout(function() {
            $('.add').fadeOut(); 
        }, 2000);
    });

    $('.footer .subtitle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.footer__full').toggle();
    });

    $('.intro-slider-1').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true, 
        autoplaySpeed: 4000,
        speed: 500
    });

    $('.products-slider-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
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
        swipeToSlide: true,
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
        swipeToSlide: true,
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
        swipeToSlide: true,
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
        swipeToSlide: true,
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

    $('.products-slider-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
        appendArrows: $('#arrows-append_4'),
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

    $('.cat-slider-1').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {   
              breakpoint: 1441,
              settings: {
                slidesToShow: 6
              }
            },
            {   
              breakpoint: 1201,
              settings: {
                slidesToShow: 7
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 5
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 576,
              settings: {
                slidesToShow: 3
              }
            } 
        ]
    });

    $('.card-slider-1').slick({
        autoplay: false,
        arrows: false, 
        //fade: true,
        //cssEase: 'linear',
        dots: false,
        asNavFor: '.card-slider-2',
        responsive: [            
            {   
              breakpoint: 768,
              settings: {
                dots: true
              }
            } 
        ]
        
    });
    $('.card-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        asNavFor: '.card-slider-1',
        focusOnSelect: true,
        vertical: true
    });

    $('.acc__top').on('click', function (e) {
        var $this = $(this);
        $this.parent('.acc__item').toggleClass('active');
        $this.next('.acc__full').slideToggle();
        $this.parent('.acc__item').siblings('.acc__item').removeClass('active').find('.acc__full').slideUp();       
        e.stopPropagation();
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.mask').mask('+7 (999) 999-99-99');
          

});