export default () => {
  var images = document.querySelectorAll('.lazyload');
  var options = {
    rootMargin: '100px',
    threshold: 0.5
  };
  var callback = function(entries, observer) {
    entries.forEach(entry => {
      entry.target.setAttribute(
        'src',
        entry.target.getAttribute('data-original')
      );
    });
  };
  var observer = new IntersectionObserver(callback, options);

  images.forEach(image => {
    observer.observe(image);
  });
};
