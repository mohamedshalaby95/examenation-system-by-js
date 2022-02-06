// start validation on form
var emailRegx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var nameReg = /^[a-zA-Z]{4,100}$/;
var notValid = "fa-times";
var valid = "fa-check";

var email = document.getElementById("email");
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var password = document.getElementById("password");
var conPassword = document.getElementById("confirm-password");
var strongRegexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

var icons = document.getElementsByClassName("validate-icon");

fName.onkeyup = function (e) {

  if (nameReg.test(fName.value) != true) {
    document.getElementById("spanfName").style.display='block';
    fName.classList.add("inValid");
    fName.classList.remove("Valid");
    
    icons[0].classList.add(notValid);
    icons[0].classList.add("not-valid");
    icons[0].style.color = "red";

  } else {
    document.getElementById("spanfName").style.display='none';
    icons[0].classList.remove("fa-times");
    icons[0].classList.add(valid);
    icons[0].classList.add("icon-valid");
    icons[0].style.color = "green";
    fName.classList.add("Valid");
    fName.classList.remove("inValid");
  }
};

lName.onkeyup = function (e) {


  if (nameReg.test(lName.value) != true) {
    document.getElementById("spanlName").style.display='block';
    lName.classList.add("inValid");
    lName.classList.remove("Valid");
    icons[1].classList.add(notValid);
    icons[1].classList.add("not-valid");
    icons[1].style.color = "red";

  } else {
    document.getElementById("spanlName").style.display='none';
    lName.classList.add("Valid");
    icons[1].classList.remove("fa-times");
    icons[1].classList.add(valid);
    icons[1].classList.add("icon-valid");
    icons[1].style.color = "green";
    lName.classList.add("Valid");
    lName.classList.remove("inValid");
  }
};
email.onkeyup = function (e) {
  if (emailRegx.test(email.value) != true) {
    document.getElementById("spanEmail").style.display='block';
    email.classList.add("inValid");
    email.classList.remove("Valid");
    icons[2].classList.add(notValid);
    icons[2].classList.add("not-valid");
    icons[2].style.color = "red";
  } else {
    document.getElementById("spanEmail").style.display='none';
    email.classList.add("Valid");
    email.classList.remove("inValid");
    icons[2].classList.remove("fa-times");
    icons[2].classList.add(valid);
    icons[2].classList.add("icon-valid");
    icons[2].style.color = "green";
  }
};

password.onkeyup = function (e) {
  if (strongRegexPassword.test(password.value) != true) {
    document.getElementById("spanPassword").style.display='block';
    password.classList.add("inValid");
    password.classList.remove("Valid");
    icons[3].classList.add(notValid);
    icons[3].classList.add("not-valid");
    icons[3].style.color = "red";
  } else {
    document.getElementById("spanPassword").style.display='none';
    password.classList.add("Valid");
    password.classList.remove("inValid");
    icons[3].classList.remove("fa-times");
    icons[3].classList.add(valid);
    icons[3].classList.add("icon-valid");
    icons[3].style.color = "green";
  }
};


conPassword.onkeyup = function (e) {
  var existPassword = password.value;


  //   conPassword.value.localeCompare(existPassword)==0
  if (conPassword.value !== existPassword && conPassword) {
    document.getElementById("spanConfirmPassword").style.display='block';
    conPassword.classList.add("inValid");
    conPassword.classList.remove("Valid");
    icons[4].classList.add(notValid);
    icons[4].classList.add("not-valid");
    icons[4].style.color = "red";
  } else {
    document.getElementById("spanConfirmPassword").style.display='none';
    conPassword.classList.add("Valid");
    conPassword.classList.remove("inValid");
    icons[4].classList.remove("fa-times");
    icons[4].classList.add(valid);
    icons[4].classList.add("icon-valid");
    icons[4].style.color = "green";
  }
};






// end validation on form 

// handel regist button start

document.getElementById('register-button').addEventListener('click', function (e) {
  console.log(nameReg.test(fName.value))

  if (nameReg.test(fName.value) == true && nameReg.test(lName.value) == true && emailRegx.test(email.value) == true
    && strongRegexPassword.test(password.value) == true && conPassword.value === password.value) {

    localStorage.setItem("fName", fName.value);
    localStorage.setItem("lName", lName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("conPassword", conPassword.value);

    location.replace("login.html")
  }

})
// handel rgist button end 