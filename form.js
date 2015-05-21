$(document).ready(function() {
  $("#submit").click(function() {
    var invalid = false;

    // name validation
    if ($("#name").val().length > 20 || $("#name").val().length < 1) {
      $("#name-invalid").show();
      invalid = true;
    } else {
      $("#name-invalid").hide();
    }

    // account validation
    if ($("#account").val().match(/\d*/g) === null || $("#account").val().match(/\d*/g).length === 2) {
      $("#student-id").show();
      $("#account-invalid").hide();
      invalid = true;
    } else if ($("#account").val().match(/([A-z]|\d|-)*/g) === null || $("#account").val().match(/([A-z]|\d|-)*/g).length !== 2) {
      $("#account-invalid").show();
      $("#student-id").hide();
      invalid = true;
    } else {
      $("#account-invalid").hide();
      $("#student-id").hide();
    }

    // school validation
    if ($("#school").val() == 0) {
      $("#school-void").show();
      invalid = true;
    } else {
      $("#school-void").hide();
    }

    // phone number validation
    if ($("#phone").val().match(/\d{11}/g) === null || $("#phone").val().match(/\d{11}/g).length !== 1) {
      $("#phone-invalid").show();
      invalid = true;
    } else {
      $("#phone-invalid").hide();
    }

    //email validation
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (($("#email").val().match(re) === null)) {
      $("#email-invalid").show();
      invalid = true;
    } else {
      $("#email-invalid").hide();
    }

    // address validation
    if ($("#address").val() == 0) {
      $("#address-void").show();
      invalid = true;
    } else {
      $("#address-void").hide();
    }

    // room validation
    if ($("#room").val().length < 1 || $("#room").val().length > 10) {
      $("#room-invalid").show();
      invalid = true;
    } else {
      $("#room-invalid").hide();
    }

    // agreement validation
    if (!($("#agreement").prop("checked"))) {
      $("#warning").css("color", "rgb(233,50,45)");
      invalid = true;
    } else {
      $("#warning").css("color", "black");  
    }

    if (invalid) {
      return false;
    }
  });
});