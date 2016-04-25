define([
    'async-series',
    './_app/dom-fade',
    './_app/viewport-class',
    './_app/vendor-init'
  ], function (series, domFade, viewportClass, vendorInit) {

  // Init Config

  var initApp = function() {
    series([
      function(done) {
        viewportClass.init();
        done()
      },
      function(done) {
        vendorInit.initSmoothScroll();
        done()
      },
      function(done) {
        setTimeout(function() {
          domFade.init();
        }, 10);
      }
      ], function(err) {
        console.log('Problem.')
    });
  }

  // Event Listeners
  window.addEventListener('resize', viewportClass.init);

  // Run App
  document.addEventListener('DOMContentLoaded', initApp);
});
