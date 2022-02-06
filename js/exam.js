// start declare question function
function Question(id, question, correctAnswer, answer) {
  (this.id = id),
    (this.question = question),
    (this.correctAnswer = correctAnswer);
  this.answer = answer;
}

// end declare question function

// end declare answer

function Answer(id, answer) {
  (this.id = id), (this.answer = answer);
}

// declare answer end

//question 1

var objectOriented = new Answer(1, "Object-Oriented");

var objectBased = new Answer(2, "Object-Based");

var assemblylanguage = new Answer(3, "Assembly-language");

var highlevel = new Answer(4, "High-level");

var typeJs = new Question(1, "Which type of JavaScript language is ___", 1, [
  objectOriented,
  objectBased,
  assemblylanguage,
  highlevel,
]);

// question 2

var Keywords = new Answer(5, "Keywords");

var dataTypes = new Answer(6, "Data types");

var declarationStatements = new Answer(7, "Declaration statements");

var Prototypes = new Answer(8, "Prototypes");

var declartion = new Question(2, 'The "function" and " var" are known as:', 2, [
  Keywords,
  dataTypes,
  declarationStatements,
  Prototypes,
]);

//question 3
var preprocessor = new Answer(9, "Preprocessor");

var triggeringEvent = new Answer(10, "Triggering Event");

var rMI = new Answer(11, "RMI");

var functionMethod = new Answer(12, "Function/Method");

var calling = new Question(
  3,
  "Which one of the following is the correct way for calling the JavaScript code?",
  3,
  [preprocessor, triggeringEvent, rMI, functionMethod]
);

//question 4

var toStrin = new Answer(13, "toString()");

var valueO = new Answer(14, "valueOf()");

var toLocaleStrin = new Answer(15, "toLocaleString()");

var toPrecision = new Answer(16, "toPrecision()");

var declare = new Question(
  4,
  "Which of the following number object function returns the value of the number?",
  1,
  [toStrin, valueO, toLocaleStrin, toPrecision]
);

// question  5

var slic = new Answer(17, "slice()");

var spli = new Answer(18, "split()");

var subst = new Answer(19, "substr()");

var searc = new Answer(20, "search()");

var methodJs = new Question(
  5,
  "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
  2,
  [slic, spli, subst, searc]
);

// question 6

var quOperator = new Answer(21, "?");

var columOperator = new Answer(22, ":");

var minsOperator = new Answer(23, "-");

var plusOperator = new Answer(24, "+");

var operatorQuestion = new Question(
  6,
  "Which one of the following is an ternary operator:",
  0,
  [quOperator, columOperator, minsOperator, plusOperator]
);

//end declare question and answer

// start  rand question

examName = `${localStorage.getItem("examName")} `;
console.log(examName);
var questions = [];
var randomQuestion = [];

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl); // false for synchronous request
  xmlHttp.send(null);
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      data = JSON.parse(xmlHttp.responseText);

      // console.log(data[0].correct_answers)
      // console.log(index)

      for (var i = 0; i < data.length; i++) {
        var index = 0;
        for (var j in data[i].correct_answers) {
          if (data[i].correct_answers[j] == "true") {
            break;
          } else {
            index++;
          }
        }

        questions.push(
          new Question(data[i].id, data[i].question, index, [
            new Answer(i + 1, data[i].answers.answer_a),
            new Answer(i + 2, data[i].answers.answer_b),
            new Answer(i + 3, data[i].answers.answer_c),
            new Answer(i + 4, data[i].answers.answer_d),
          ])
        );
      }

      randomQuestion = shuffleQuestion(questions);
      for (var i = 0; i < randomQuestion.length; i++) {
        markSelect.push(-1);
        answersExam.push(-1);
      }
      nextquestion();
      document.getElementById("prev-button").disabled = true;
      document.getElementById("prev-button").style.backgroundColor = "gray";
    }
  };
}

function shuffleQuestion(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }

  return array.splice(0, 5);
}

// var randomQuestion = shuffleQuestion(questions);

// rand question end

// start default declaration

document.getElementById("exam-name").innerHTML = `${localStorage.getItem(
  "examName"
)} exam`;

var markSelect = [],
  answersExam = [];

// end default declaration

document.getElementById("inf-login").innerHTML = ` hi ${localStorage.getItem(
  "fName"
)}`;

var radioButtons = document.getElementsByClassName("select-answer");

// prev button start

var numberQuestion = -1;
document.getElementById("prev-button").addEventListener("click", function (e) {
  if (numberQuestion > -1) {
    numberQuestion--;

    document.getElementById("question").innerHTML = `${numberQuestion + 1}-${
      randomQuestion[numberQuestion].question
    }`;

    var rowRadio = `<div class="ms-3"> 
    <input class="select-answer" type="radio" id="0" name="fav_language" value=${randomQuestion[numberQuestion].answer[0].answer}>
    <label for="0">${randomQuestion[numberQuestion].answer[0].answer}</label><br>
    <input class="select-answer" type="radio" id="1" name="fav_language" value=${randomQuestion[numberQuestion].answer[1].answer}>
    <label for="1">${randomQuestion[numberQuestion].answer[1].answer}</label><br>
    <input class="select-answer" type="radio" id="2" name="fav_language" value=${randomQuestion[numberQuestion].answer[2].answer}>
    <label for="2">${randomQuestion[numberQuestion].answer[2].answer}</label><br/>
      <input class="select-answer" type="radio" id="3" name="fav_language" value=${randomQuestion[numberQuestion].answer[3].answer}>
    <label for="3">${randomQuestion[numberQuestion].answer[3].answer}</label>
    </div>`;
    document.getElementById("chooices").innerHTML = rowRadio;
    if (answersExam[numberQuestion] != -1) {
      document.getElementsByClassName("select-answer")[
        answersExam[numberQuestion]
      ].checked = true;
    }

    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].addEventListener("click", function (e) {
        answersExam[numberQuestion] = e.target.id;
      });
    }

    if (numberQuestion == 0) {
      document.getElementById("prev-button").disabled = true;
      document.getElementById("prev-button").style.backgroundColor = "gray";
    } else {
      document.getElementById("prev-button").disabled = false;
      document.getElementById("prev-button").style.backgroundColor = "#01987a";
    }
    if (numberQuestion < 4) {
      document.getElementById("next-button").disabled = false;
      document.getElementById("next-button").style.backgroundColor = "#01987a";
    }
  }
});

//  end prev button

// start next button

function nextquestion() {
  ++numberQuestion;

  if (numberQuestion < randomQuestion.length) {
    document.getElementById("question").innerHTML = ` ${numberQuestion + 1}-${
      randomQuestion[numberQuestion].question
    }`;

    var rowRadio = `<div class="ms-3"> 
    <input class="select-answer" type="radio" id="0" name="fav_language" value=${randomQuestion[numberQuestion].answer[0].answer}>
    <label for="0">${randomQuestion[numberQuestion].answer[0].answer}</label><br>
    <input class="select-answer" type="radio" id="1" name="fav_language" value=${randomQuestion[numberQuestion].answer[1].answer}>
    <label for="1">${randomQuestion[numberQuestion].answer[1].answer}</label><br>
    <input class="select-answer" type="radio" id="2" name="fav_language" value=${randomQuestion[numberQuestion].answer[2].answer}>
    <label for="2">${randomQuestion[numberQuestion].answer[2].answer}</label><br/>
      <input class="select-answer" type="radio" id="3" name="fav_language" value=${randomQuestion[numberQuestion].answer[3].answer}>
    <label for="3">${randomQuestion[numberQuestion].answer[3].answer}</label>
    </div>`;
    document.getElementById("chooices").innerHTML = rowRadio;
    //answersExam[numberQuestion] = -1;
    if (answersExam[numberQuestion] != -1) {
      document.getElementsByClassName("select-answer")[
        answersExam[numberQuestion]
      ].checked = true;
    }

    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].addEventListener("click", function (e) {
        answersExam[numberQuestion] = e.target.id;
      });
    }

    document.getElementById("prev-button").disabled = false;
    document.getElementById("prev-button").style.backgroundColor = "#01987a";
  }

  if (numberQuestion > 3) {
    document.getElementById("next-button").disabled = true;
    document.getElementById("next-button").style.backgroundColor = "gray";
  }
}

//nextquestion();

// end  next button

//start mark button

function markButton() {
  for (var i = numberQuestion; i < markSelect.length; i++) {
    if (numberQuestion == markSelect[i]) {
      break;
    } else {
      markSelect[numberQuestion] = numberQuestion;
      document.getElementById("mark-content").innerHTML += `
    <tr id=${`${numberQuestion}tr`}>
    
    <td> ${Number(numberQuestion) + 1}</td>
 
    <td class="  d-flex " id="button-acess"> <button class="btn btn-primary mb-1"  id=${numberQuestion} onclick="goQuestion(this)">Go </button> <button class="btn btn-danger mb-1" id=${`${numberQuestion}`} onclick="deleteQuestion(this)"><i class=" delete-from-mark fas fa-trash-alt"></i></button></td>
    </tr>
    `;
      console.log(markSelect);
      console.log(answersExam);
      break;
    }
  }
}

//end mark button

// start delete  from mark content

function deleteQuestion(e) {
  console.log(e.id);
  var id = `${e.id}tr`;
  console.log(id);
  markSelect[e.id] = -1;
  document.getElementById(id).remove();
}
// end delete  from mark content

// start go to question
function goQuestion(e) {
  numberQuestion = e.id;
  document.getElementById("question").innerHTML = `${
    Number(numberQuestion) + 1
  } - ${randomQuestion[numberQuestion].question} `;

  var rowRadio = `<div class="ms-3"> 
    <input class="select-answer" type="radio" id="0" name="fav_language" value=${randomQuestion[numberQuestion].answer[0].answer}>
    <label for="0">${randomQuestion[numberQuestion].answer[0].answer}</label><br>
    <input class="select-answer" type="radio" id="1" name="fav_language" value=${randomQuestion[numberQuestion].answer[1].answer}>
    <label for="1">${randomQuestion[numberQuestion].answer[1].answer}</label><br>
    <input class="select-answer" type="radio" id="2" name="fav_language" value=${randomQuestion[numberQuestion].answer[2].answer}>
    <label for="2">${randomQuestion[numberQuestion].answer[2].answer}</label><br/>
      <input class="select-answer" type="radio" id="3" name="fav_language" value=${randomQuestion[numberQuestion].answer[3].answer}>
    <label for="3">${randomQuestion[numberQuestion].answer[3].answer}</label>
    </div>`;
  document.getElementById("chooices").innerHTML = rowRadio;

  // start return to show select value user checked

  if (answersExam[numberQuestion] != -1) {
    console.log("here");

    document.getElementsByClassName("select-answer")[
      answersExam[numberQuestion]
    ].checked = true;
  }

  // end return to show select value user checked

  //start to change the answer

  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", function (e) {
      answersExam[numberQuestion] = e.target.id;
    });

    //end to change the answer

    //start handele prev and next

    if (e.id == 0) {
      document.getElementById("prev-button").disabled = true;
      document.getElementById("prev-button").style.backgroundColor = "gray";
    } else {
      document.getElementById("prev-button").disabled = false;
      document.getElementById("prev-button").style.backgroundColor = "#01987a";
    }

    if (e.id == randomQuestion.length - 1) {
      document.getElementById("next-button").disabled = true;
      document.getElementById("next-button").style.backgroundColor = "gray";
    } else {
      document.getElementById("next-button").disabled = false;
      document.getElementById("next-button").style.backgroundColor = "#01987a";
    }
  }
  //end handele prev and next
}

// end go to question

// start timer progress

var ProgressTimer = document.getElementById("timer-exam");

var timerExam = setInterval(() => {
  if (ProgressTimer.value == 100) {
    clearInterval(timerExam);
  } else {
    ProgressTimer.value = ProgressTimer.value + 1;
  }
}, 3000);

// end timer progress

//start timer down

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var timerDowen = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (minutes == "01" || minutes == "00") {
      document.getElementById("timer").style.background = "red";
    } else {
      document.getElementById("timer").style.background = "#01987a";
    }

    if (--timer < 0) {
      clearInterval(timerDowen);
      submit();
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.getElementById("timer");
  startTimer(fiveMinutes, display);
};

// end timer down

//start sumbit

function submit() {
  var exameResulte = 0;
  for (var i = 0; i < randomQuestion.length; i++) {
    if (randomQuestion[i].correctAnswer == answersExam[i]) {
      exameResulte++;
    }
  }

  localStorage.setItem("resultexam", exameResulte);
  location.replace("result.html");
}

//end submit

// start prevent load on browser on key

document.addEventListener("keydown", function (e) {
  if (
    e.key == "F5" ||
    e.key == "F11" ||
    (e.ctrlKey == true && (e.key == "r" || e.key == "R")) ||
    e.keyCode == 116 ||
    e.keyCode == 82
  ) {
    e.preventDefault();
  }
  console.log("here");
});

// end prevent load on browser on key







window.addEventListener('beforeunload', (event) => {
  // console.log(event)
  // event.preventDefault()
  event.returnValue = "Are you sure leve ?";
});


// end avoid refresh from browsers

//start  chooice exam
switch (examName.trim()) {
  case "JS":
    questions = [
      operatorQuestion,
      methodJs,
      declare,
      calling,
      declartion,
      typeJs,
    ];

    randomQuestion = shuffleQuestion(questions);
    for (var i = 0; i < randomQuestion.length; i++) {
      console.log("random");
      markSelect.push(-1);
      answersExam.push(-1);
    }

    nextquestion();
    document.getElementById("prev-button").disabled = true;
    document.getElementById("prev-button").style.backgroundColor = "gray";

    break;

  case "Linx":
    httpGet(
      `https://quizapi.io/api/v1/questions?apiKey=8KROANGP5lGBc1mEsLlq1DZSqFEbQnKAtykKEVPN&limit=10&category=Linux`
    );
    break;
  case "DevOps":
    httpGet(
      `https://quizapi.io/api/v1/questions?apiKey=8KROANGP5lGBc1mEsLlq1DZSqFEbQnKAtykKEVPN&limit=10&category=DevOps`
    );
    break;
  case "Cloud":
    httpGet(
      `https://quizapi.io/api/v1/questions?apiKey=8KROANGP5lGBc1mEsLlq1DZSqFEbQnKAtykKEVPN&limit=10&category=Cloud`
    );
    break;

  case "Networking":
    httpGet(
      `https://quizapi.io/api/v1/questions?apiKey=8KROANGP5lGBc1mEsLlq1DZSqFEbQnKAtykKEVPN&limit=10&category=Networking`
    );
    break;

  case "Docker":
    httpGet(
      `https://quizapi.io/api/v1/questions?apiKey=8KROANGP5lGBc1mEsLlq1DZSqFEbQnKAtykKEVPN&limit=10&category=Docker`
    );
    break;
  case "Kubernetes":
    httpGet(
      "https://quizapi.io/api/v1/questions?apiKey=8KROANGP5lGBc1mEsLlq1DZSqFEbQnKAtykKEVPN&limit=10&category=Kubernetes"
    );
    break;
  default:
    break;
}

//end  chooice exam
