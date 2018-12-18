export default () => {
  const images = document.querySelectorAll('.lazyload');
  const options = {
    rootMargin: '0px',
    threshold: 0.1
  };
  const callback = function(entries, observer) {
    entries.forEach(entry => {
      entry.target.setAttribute(
        'src',
        entry.target.getAttribute('data-src')
      );
    });
  };
  const observer = new IntersectionObserver(callback, options);

  images.forEach(image => {
    observer.observe(image);
  });
};
