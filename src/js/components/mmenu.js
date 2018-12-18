export default () => {
  $('#my-menu').mmenu({
    pageScroll: true
  });
  const API = $('#my-menu').data('mmenu');
  $('.mobile-menu').on('click', () => {
    API.open();
  });
};
