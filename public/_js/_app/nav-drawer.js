define('navDrawer', function() {

  var body = document.querySelector('body'),
      navButton = document.querySelectorAll('.nav-btn');

  var navDrawer = function(){
    body.classList.toggle('nav-active');
  }

  var i;
    for (i = 0; i < navButton.length; i++) {
    navButton[i].addEventListener( 'click', navDrawer );
  }

});
