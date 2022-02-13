var correctAnswer = 0; //


var questionCount = 0; //Store answers clicked on

var q1a1 =document.getElementById("q1a1");
var q1a2 =document.getElementById("q1a2");

var q2a1 =document.getElementById("q2a1");
var q2a2 =document.getElementById("q2a2");
var q2a3 =document.getElementById("q2a3");
var q2a4 =document.getElementById("q2a4");

var q3a1 =document.getElementById("q3a1");
var q3a2 =document.getElementById("q3a2");
var q3a3 =document.getElementById("q3a3");

var q4a1 =document.getElementById("q4a1");
var q4a2 =document.getElementById("q4a2");
var q4a3 =document.getElementById("q4a3");

var q5a1 =document.getElementById("q5a1");
var q5a2 =document.getElementById("q5a2");

var q6a1 =document.getElementById("q6a1");
var q6a2 =document.getElementById("q6a2");
var q6a3 =document.getElementById("q6a3");
var q6a4 =document.getElementById("q6a4");

var q7a1 =document.getElementById("q7a1");
var q7a2 =document.getElementById("q7a2");

var q8a1 =document.getElementById("q8a1");
var q8a2 =document.getElementById("q8a2");
var q8a3 =document.getElementById("q8a3");
var q8a4 =document.getElementById("q8a4");

var q9a1 =document.getElementById("q9a1");
var q9a2 =document.getElementById("q9a2");
var q9a3 =document.getElementById("q9a3");
var q9a4 =document.getElementById("q9a4");

var q10a1 =document.getElementById("q10a1");
var q10a2 =document.getElementById("q10a2");
var q10a3 =document.getElementById("q10a3");
var q10a4 =document.getElementById("q10a4");

var result = document.getElementById ("result");

var restart =document.getElementById ("restart");

q1a1.addEventListener("click",correct);
q1a2.addEventListener("click",incorrect);

q2a1.addEventListener("click",correct);
q2a2.addEventListener("click",incorrect);

q3a1.addEventListener("click",correct);
q3a2.addEventListener("click",incorrect);

restart.addEventListener("click",restartQuiz);


function correct () {
  correctAnswer += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " spookyScore = " + spookyScore);

  if (questionCount ==3 ) {
    console.log ("The quiz is done")
    updateResult ();
  }
}



function updateResult () {
  if(correctAnswer >= 1) {
    result.innerHTML = "You got 1 out of 3 correct";
    console.log ("You got 1 out of 3 correct");

  } else if (correctAnswer >= 2 ) {
    result.innerHTML = "You got 2 out of 3 correct";
    console.log ("You got 2 out of 3 correct");
  }
}

function restartQuiz () {
  result.innerHTML = "Your result is...";
 correctAnswer = 0;
 questionCount = 0;
console.log ("questionCount = 0 correctAnswer = 0 ");
enableQuestions ();

}

q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", disableq1);

q2a1.addEventListener("click",disableq2);
q2a2.addEventListener("click",disableq2);

q3a1.addEventListener("click",disableq3);
q3a2.addEventListener("click",disableq3);

function disableq1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableq2 () {
q2a1.disabled = true;
q2a2.disabled = true;
}

function disableq3 () {
q3a1.disabled = true;
q3a2.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
