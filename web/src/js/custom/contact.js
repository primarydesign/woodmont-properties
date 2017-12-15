(function(window, $, undefined) {$(document).ready(function() {

  /* VALIDATE AND SUBMIT FORM */

  var form = $('.section__contact-form');
  var submit = $('.form__submit-button');
  var fields = '.form-control';
  var inputs = '.form-control';
  var Errors = {}, Patterns = {};

  Errors['EMPTY_REQUISITE'] = 'Required';
  Errors['INVALID_EMAIL'] = 'Please enter a valid email address.';
  Errors['INVALID_TEL'] = 'Please enter a valid phone number.';
  Patterns['EMAIL'] = "[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9-.]+$";
  Patterns['PHONE'] = "^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";


  $(inputs).on('blur', function() {
    validateInput(this);
  });
  $(submit).on('click', function(event) {
    event.preventDefault();
    var clearance = 0;
    $(inputs).each(function() {
      clearance += validateInput(this);
    });
    if (clearance === 0){
	    $(form).submit();
     }
  });
  $(form).on('submit', function(event) {
    event.preventDefault();
    submit.prop('disabled', true).val('SENDING');
    $.ajax({
      type: 'POST',
      url: '/app/themes/woodmont-props-child/submit.php',
      data: $(this).serialize(),
      success: function (data) {
        closeForm();
      }
    });
  });

  function assignError(field, code) {
    if (code) {
      $(field).attr('data-error', Errors[code]);
    } else {
      $(field).removeAttr('data-error');
    }
  }
  function validateInput(input) {
    var input = $(input);
    var field = input.closest(fields);
    var required = input.attr('required');
    var pattern = input.data('pattern');
    var value = input.val();
    var clearance = 0;
    if (pattern) pattern = Patterns[pattern.toUpperCase()] || pattern;
    if (required && value === "") {
      assignError(field, 'EMPTY_REQUISITE');
      ++clearance;
    } else if (pattern && ! new RegExp(pattern).test(value)) {
      assignError(field, 'INVALID_' + input.attr('type').toUpperCase());
      ++clearance;
    } else {
      assignError(field, false);
    }
    return clearance;
  }
  function closeForm() {
    $(form).html('<h3 class="footer__headline">Thank You! Your Message Has Been Sent.</h3>');
  }
  window.close = closeForm;

});})(window, jQuery);
