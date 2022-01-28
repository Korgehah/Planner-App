'use strict';

$(document).ready(() => {
  // navigation mob
  $('.header__burger').on('click', () => {
    $('.navigation_mob').addClass('--open');
  });
  $('.navigation__close').on('click', () => {
    $('.navigation_mob').removeClass('--open');
  });

  // sliders settings
  $('.introduction__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1.5,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1266,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1052,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 828,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.blog__slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5500,
    responsive: [
      {
        breakpoint: 636,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // animation function
  const animation = (className) => {
    let $elements = $('.' + className);
    let delay = 300;
    let windowHeight = $(window).height();
    $(document).on('scroll', () => {
      let self = $('.' + className),
        height = self.offset().top + self.height() / 2;
      if ($(document).scrollTop() + windowHeight >= height) {
        (function add(i) {
          $elements.eq(i).addClass(className + '_animated');
          if (i < $elements.length - 1) {
            setTimeout(() => {
              add(i + 1);
            }, delay);
          }
        })(0);
      }
    });
  };

  animation('app__image-container');
  animation('about__card');

  // counter
  let windowHeight = $(window).height(),
    flag = true;
  $(document).on('scroll', () => {
    let self = $('.statistics__title'),
      height = self.offset().top;
    if ($(document).scrollTop() + windowHeight >= height) {
      if (flag) {
        $('.statistics__counter').each(function () {
          $(this)
            .prop('Counter', 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
          flag = false;
        });
      }
    }
  });

  //faq
  $('.faq__list-item').on('click', function () {
    console.log(this);
    $(this).toggleClass('--open');
  });
});
