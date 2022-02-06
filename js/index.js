// start go register
function goRegister() {
  location.href = "register.html";
}

// end go register

// start gologin

function goLogin() {
  location.href = "login.html";
}
// end gologin

//start choice exam

function choiceExam() {
  if (localStorage.getItem("email") === null) {
    alert("you should register before choice exams");
  } else {
    location.href = "exams.html";
  }
}

if(localStorage.getItem("email") !== null){

  document.getElementById('login-btn').style.display='none'
  document.getElementById('rigister-btn').style.display='none'
  document.getElementById('user-name').innerHTML=
  `hi
 ${localStorage.getItem('fName')}
 <i class="fas fa-user"></i>
  `
}
else{
  document.getElementById('login-btn').style.display='block'
  document.getElementById('rigister-btn').style.display='block' 
  document.getElementById('user-name').style.display='none'

}



//end choice exam
