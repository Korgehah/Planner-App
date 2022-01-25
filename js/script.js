$(document).ready(function () {
  $('.introduction__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  });
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1.5,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.blog__slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
  });
});
