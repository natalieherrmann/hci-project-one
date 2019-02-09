'use strict';
(function(){
  // Check whether the browser can use the DOM
  if (typeof(document.querySelector)==='undefined' || typeof(document.addEventListener)==='undefined') {
    return;
  }

  // Run JS once DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {

    var form_submit = document.querySelector('#submit');
    var name_input = document.querySelector('#name');
    var email_input = document.querySelector('#email');
    var name_done = false;
    var email_done = false;

    // Prohibit users from clicking 'Submit' until they seem to complete the
    // Name and Email input
    form_submit.setAttribute('disabled', 'disabled');

    name_input.addEventListener('keyup', function(){
      var name = this.value;
      if (name.length >= 1) {
        name_done = true;
        doneYet();
      }
    });

    email_input.addEventListener('keyup', function(){
      var email = this.value;
      if (email.length >= 1) {
        email_done = true;
        doneYet();
      }
    });

    // Enables the Submit button if both Name and Email are complete
    function doneYet() {
      if (name_done && email_done) {
        form_submit.removeAttribute('disabled');
      }
    }
  });

})();
