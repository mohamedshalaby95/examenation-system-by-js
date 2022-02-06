//start navbar data

var fristName = localStorage.getItem("fName");


document.getElementById("inf-login").innerHTML = fristName;

//end navbar data

//start make rows exams
var exams=['JS','Linx','DevOps','Docker']


var row=""

for(var i=0;i<exams.length;i++){
  
  row += `
  
  <tr class="text-center rows">
  <td>${exams[i]}</td>
  <td>5 m</td>
  <td>5 </td>
  <td>medium </td>
  <td class="d-flex justify-content-center"><button id=${i} class=" btnExam btn  start-exam "> Start Exam</button></td>
  </tr>
  
  
  `;

}
document.getElementById("result-row").innerHTML = row;
//onclick="startExam()"

var examchooice=document.getElementsByClassName('start-exam')

for(var i=0;i<examchooice.length;i++){
  examchooice[i].addEventListener('click',(e)=>{

    switch(e.target.id){
case '0':
     localStorage.setItem("examName",exams[0]);
  location.href = `exam.html`
  break;
  case '1':
     localStorage.setItem("examName",exams[1]);
  location.href = `exam.html`
  break;
  case '2':
     localStorage.setItem("examName",exams[2]);
  location.href = `exam.html`
  break;
//   case '3':
//      localStorage.setItem("examName",exams[3]);
//   location.href = `exam.html`
//   break;
//   case '4':
//     localStorage.setItem("examName",exams[4]);
//  location.href = `exam.html`
//  break;
//  case '5':
//   localStorage.setItem("examName",exams[5]);
// location.href = `exam.html`
// break;

default:
  localStorage.setItem("examName",exams[3]);
location.href = `exam.html`

    }
     
// if(e.target.id==0)
// {
//    localStorage.setItem("examName",exams[0]);
//   location.href = `exam.html`
// }
// else if(e.target.id==1){
//   localStorage.setItem("examName",exams[1]);
//   location.href = `exam.html`
// }


  })
}
function goBack() {
  location.href = "index.html";
}

//end go back

