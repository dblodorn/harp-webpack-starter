define(['./debounce'], function(debounce) {
  
  var html =    document.querySelector('html'),
      width =   900;

  var viewportClass = {};

  viewportClass.init = debounce(function() {
    if (window.innerWidth < width) {
      html.classList.add('mobile');
      html.classList.remove('desktop');
    } else {
      html.classList.remove('mobile');
      html.classList.add('desktop');
    }
  }, 100);

  return viewportClass;

});