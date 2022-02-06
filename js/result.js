// start navbar data

var fristName = localStorage.getItem("fName");
var lastName = localStorage.getItem("lName");

var fullName = `${fristName} ${lastName}`;

document.getElementById("inf-login").innerHTML = fullName;

// end navbar data

// start heading

var examName = localStorage.getItem("examName");

// end heading

// start table data

var examResult = localStorage.getItem("resultexam");

document.getElementById(
  "result-heading"
).innerHTML = ` Your Result In ${examName} Exam `;

var row = `

<tr>
<td>${examName}</td>
<td>5 m</td>
<td>5 </td>
<td>medium </td>
<td><i class="fas fa-star "></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </td>
</tr>


`;
document.getElementById("result-row").innerHTML = row;
var iconsResult = document.getElementsByClassName("fa-star");
for (var i = 0; i < examResult; i++) {
  iconsResult[i].style.color = "yellow";
}
// end table data

// start go back button

function goBack() {
  location.href = "index.html";
}

// end go back button
