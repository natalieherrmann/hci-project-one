'use strict';
(function(){
  // Check whether the browser can use the DOM
  if (typeof(document.querySelector)==='undefined' || typeof(document.addEventListener)==='undefined') {
    return;
  }

  // Run JS once DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
  });

})();
