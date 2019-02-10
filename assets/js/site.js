'use strict';
(function(){
  // Check whether the browser can use the DOM
  if (typeof(document.querySelector)==='undefined' || typeof(document.addEventListener)==='undefined') {
    return;
  }

  function checkName(name) {
    if (name.length >= 1) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkEmail(email) {
    var valid_email = /^[^@]+@[^@]+$/g;
    // Checks that email starts with a non '@' characters,
    // includes one '@', followed by non '@' characters
    email = email.replace(/\s/g, ''); // Removes whitespace
    if (email.length >= 1 && valid_email.test(email)) {
      return true;
    }
    else {
      return false;
    }
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
      name_done = checkName(this.value);
      doneYet();
    });

    email_input.addEventListener('keyup', function(){
      email_done = checkEmail(this.value);
      doneYet();
    });

    // Enables the Submit button if both Name and Email are complete
    function doneYet() {
      if (name_done && email_done) {
        form_submit.removeAttribute('disabled');
      }
      // Disables the Submit button again if Name or Email become invalid
      else {
        form_submit.setAttribute('disabled', 'disabled');
      }
    }
  });

})();
