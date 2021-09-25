$(function () {
    'use strict';
    // Banner slider start
    $('#hero-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    //POPUP VIDEOS START
    $('.popup-video').venobox(); 
    // POPUP IMAGE START
    $('.popup-image').venobox(); 
    // TESTIMONILA SLIDER 
    $('#testimonial-background').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    // COUNTERUP 
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });
    // LOGO SECTION
    $('#logo-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arr"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }
        ]
      });
      // OUR PROFILE SECTION SLIDER 
      $('#team-card-container').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          },
          {
            breakpoint: 576.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});