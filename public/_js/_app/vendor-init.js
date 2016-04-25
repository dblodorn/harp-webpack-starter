define('vendorInit', ['jquery','webfontloader','smooth-scroll'], function($, WebFont, smoothScroll) {

  var body = document.querySelector('body');

  var vendorInit = {};

  // SmoothScroll
  vendorInit.initSmoothScroll = function() {
    smoothScroll.init({
      selector: '[data-scroll]',
      speed: 500,
      easing: 'easeInOutCubic',
      offset: 0,
      updateURL: false
    });
  }

  // Webfont Loader
  vendorInit.initWebfonts = function() {
    WebFont.load({
      custom: {
        families: ['']
      }
    });
  }

  return vendorInit;

});