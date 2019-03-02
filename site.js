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
    var name_done = checkName(name_input.value);
    var email_done = checkEmail(email_input.value);

    // Prohibit users from clicking 'Submit' until they seem to complete the
    // Name and Email input
    form_submit.setAttribute('disabled', 'disabled');

    // Check if inputs are valid after page load
    // If user refreshed page, there may be valid input from before
    doneYet();

    // Create an area for showing hints next to form labels
    document.querySelector("#name-label").innerHTML += ' <p id="name-error"></p>';
    document.querySelector("#email-label").innerHTML += ' <p id="email-error"></p>';

    name_input.addEventListener('keyup', function(){
      name_done = checkName(this.value);
      if (name_done) {
        document.querySelector("#name-error").innerText = '';
      }
      doneYet();
    });

    // Add alert if name field is incomplete when user the clicks off
    // Remove alert if field is complete
    name_input.addEventListener('blur', function(){
      nameAlert();
    });

    email_input.addEventListener('keyup', function(){
      email_done = checkEmail(this.value);
      if (email_done) {
        document.querySelector("#email-error").innerText = '';
      }
      doneYet();
    });

    // Add alert if email field is incomplete when user the clicks off
    // Remove alert if field is complete
    email_input.addEventListener('blur', function(){
      emailAlert();
    });

    // Toggle alerts when user hovers over the Submit button
    form_submit.addEventListener('mouseover', function(){
      nameAlert();
      emailAlert();
    });

    // Toggle alerts when user taps the Submit button (mobile)
    form_submit.addEventListener('touchstart', function(){
      nameAlert();
      emailAlert();
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

    function nameAlert() {
      var name = document.querySelector("#name-error");
      if (!name_done) {
        name.innerText = 'Enter your name';
      }
      else {
        name.innerText = '';
      }
    }

    function emailAlert() {
      var email = document.querySelector("#email-error");
      if (!email_done && email_input.value.length === 0) {
        email.innerText = 'Enter your email';
      }
      else if (!email_done) {
        email.innerText = 'Email must include @';
      }
      else {
        email.innerText = '';
      }
    }
  });

})();
