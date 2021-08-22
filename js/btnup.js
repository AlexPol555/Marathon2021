(function () {
   'use strict';
   var goTopBtn = document.querySelector('.backto-top');

   function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
         goTopBtn.classList.add('backto-top-show');
      }
      if (scrolled < coords) {
         goTopBtn.classList.remove('backto-top-show');
      }
   }

   function backToTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -80);
         setTimeout(backToTop, 0);
      }
   }
   window.addEventListener('scroll', trackScroll);
   goTopBtn.addEventListener('click', backToTop);
})();