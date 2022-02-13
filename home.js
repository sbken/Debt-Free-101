var correctAnswer = 0; //


var questionCount = 0; //Store answers clicked on

var q1a1 =document.getElementById("q1a1");
var q1a2 =document.getElementById("q1a2");

var q2a1 =document.getElementById("q2a1");
var q2a2 =document.getElementById("q2a2");

var q3a1 =document.getElementById("q3a1");
var q3a2 =document.getElementById("q3a2");

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
