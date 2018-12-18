export default () => {
  $('.owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      560: {
        items: 2,
        nav: true
      },
      812: {
        items: 3
      }
    }
  });
};
