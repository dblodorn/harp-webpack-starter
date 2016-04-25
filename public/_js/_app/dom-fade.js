define('domFade', ['async-series'], function(series) {

  var nav     = document.querySelector('nav'),
      header  = document.querySelector('header'),
      main    = document.querySelector('main');

  var domFade = {};

  domFade.init = function(){
    series([
      function(done) {
        setTimeout(function() {
          header.classList.add('fade-in');
          done()
        }, 10);
      },
      function(done) {
        setTimeout(function() {
          nav.classList.add('fade-in');
          done()
        }, 10);
      },
      function(done) {
        setTimeout(function() {
          main.classList.add('fade-in');
        }, 10);
      }
      ], function(err) {
        console.log('Problem.')
    });
  }

  return domFade;

});