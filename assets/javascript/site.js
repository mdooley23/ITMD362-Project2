document.getElementById("submit").addEventListener("click", allInputs);

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

form.onsubmit = submit;

function allInputs() {
  var a = document.forms["form-one"]["first-name"].value;
  var b = document.forms["form-one"]["last-name"].value;
  var c = document.forms["form-one"]["email"].value;
  var d = document.forms["form-one"]["phone"].value;
  if ((a == "") || (b == "") || (c == "") || (d == "")){
    alert("Make sure all form sections are properly filled out.");
  }
  else{
    alert("Sign up success! Thank you for helping ISUD make the world a better place!");
  }
}
