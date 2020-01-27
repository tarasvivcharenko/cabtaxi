$('.slider-content').slick({
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 888,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});