var emailStored = localStorage.getItem("email");
var passwordStored = localStorage.getItem("password");
var email = document.getElementById("email");
var password = document.getElementById("password");

document.getElementById("btn-login").onclick = function () {
  if (email.value === emailStored && password.value == passwordStored) {
    location.href = "exams.html";
  } else {
    console.log(document.getElementsByClassName("span-validate")[0]);
    document.getElementsByClassName("span-validate")[0].style.display = "block";

    email.value = "";
    password.value = "";
  }
};
