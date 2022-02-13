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

q2a1.addEventListener("click",incorrect);
q2a2.addEventListener("click",incorrect);
q2a3.addEventListener("click",incorrect);
q2a4.addEventListener("click",correct);

q3a1.addEventListener("click",incorrect);
q3a2.addEventListener("click",correct);
q3a3.addEventListener("click",incorrect);

q4a1.addEventListener("click",incorrect);
q4a2.addEventListener("click",incorrect);
q4a3.addEventListener("click",correct);

q5a1.addEventListener("click",correct);
q5a2.addEventListener("click",incorrect);

q6a1.addEventListener("click",incorrect);
q6a2.addEventListener("click",incorrect);
q6a3.addEventListener("click",incorrect);
q6a4.addEventListener("click",correct);

q7a1.addEventListener("click",correct);
q7a2.addEventListener("click",incorrect);

q8a1.addEventListener("click",correct);
q8a2.addEventListener("click",incorrect);
q8a3.addEventListener("click",incorrect);
q8a4.addEventListener("click",incorrect);

q9a1.addEventListener("click",correct);
q9a2.addEventListener("click",incorrect);
q9a3.addEventListener("click",incorrect);
q9a4.addEventListener("click",incorrect);

q10a1.addEventListener("click",incorrect);
q10a2.addEventListener("click",correct);
q10a3.addEventListener("click",incorrect);
q10a4.addEventListener("click",incorrect);

restart.addEventListener("click",restartQuiz);


function correct () {
  correctAnswer += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " correctAnswer = " + correctAnswer);

  if (questionCount ==10 ) {
    console.log ("The quiz is done")
    updateResult ();
  }
}



function updateResult () {
  if(correctAnswer >= 0) {
    result.innerHTML = "You got 0 out of 10 correct";
    console.log ("You got 0 out of 10 correct");
    
  else if(correctAnswer >= 1) {
    result.innerHTML = "You got 1 out of 10 correct";
    console.log ("You got 1 out of 10 correct");

  } else if (correctAnswer >= 2 ) {
    result.innerHTML = "You got 2 out of 10 correct";
    console.log ("You got 2 out of 10 correct");
  }

  else if(correctAnswer >= 3) {
    result.innerHTML = "You got 3 out of 10 correct";
    console.log ("You got 3 out of 10 correct");

  } else if (correctAnswer >= 4 ) {
    result.innerHTML = "You got 4 out of 10 correct";
    console.log ("You got 4 out of 10 correct");
  }

  else if(correctAnswer >= 5) {
    result.innerHTML = "You got 5 out of 10 correct";
    console.log ("You got 5 out of 10 correct");

  } else if (correctAnswer >= 6 ) {
    result.innerHTML = "You got 6 out of 10 correct";
    console.log ("You got 6 out of 10 correct");
}

  else if(correctAnswer >= 7) {
    result.innerHTML = "You got 7 out of 10 correct";
    console.log ("You got 7 out of 10 correct");

  } else if (correctAnswer >= 8 ) {
    result.innerHTML = "You got 8 out of 10 correct";
    console.log ("You got 8 out of 10 correct");
  }

  else if(correctAnswer >= 9) {
    result.innerHTML = "You got 9 out of 10 correct";
    console.log ("You got 9 out of 10 correct");

  }  else (correctAnswer >= 10 ) {
    result.innerHTML = "You got 10 out of 10 correct. Great Job!";
    console.log ("You got 10 out of 10 correct");
  }
  
function restartQuiz () {
 correctAnswer = 0;
 questionCount = 0;
console.log ("questionCount = 0 correctAnswer = 0 ");
enableQuestions ();

}

q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", disableq1);

q2a1.addEventListener("click",disableq2);
q2a2.addEventListener("click",disableq2);
q2a3.addEventListener("click",disableq2);
q2a4.addEventListener("click",disableq2);

q3a1.addEventListener("click",disableq3);
q3a2.addEventListener("click",disableq3);
q3a3.addEventListener("click",disableq3);
    
q4a1.addEventListener("click",disableq4);
q4a2.addEventListener("click",disableq4);
q4a3.addEventListener("click",disableq4);

q5a1.addEventListener("click", disableq5);
q5a2.addEventListener("click", disableq5);
    
q6a1.addEventListener("click",disableq6);
q6a2.addEventListener("click",disableq6);
q6a3.addEventListener("click",disableq6);
q6a4.addEventListener("click",disableq6);
    
q7a1.addEventListener("click", disableq7);
q7a2.addEventListener("click", disableq7);
    
q8a1.addEventListener("click",disableq8);
q8a2.addEventListener("click",disableq8);
q8a3.addEventListener("click",disableq8);
q8a4.addEventListener("click",disableq8);
    
q9a1.addEventListener("click",disableq9);
q9a2.addEventListener("click",disableq9);
q9a3.addEventListener("click",disableq9);
q9a4.addEventListener("click",disableq9);
    
q10a1.addEventListener("click",disableq10);
q10a2.addEventListener("click",disableq10);
q10a3.addEventListener("click",disableq10);
q10a4.addEventListener("click",disableq10);

    
function disableq1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableq2 () {
q2a1.disabled = true;
q2a2.disabled = true;
q2a3.disabled = true;
q2a4.disabled = true;
}

function disableq3 () {
q3a1.disabled = true;
q3a2.disabled = true;
q3a3.disabled = true;
}
    
function disableq4 () {
q4a1.disabled = true;
q4a2.disabled = true;
q4a3.disabled = true;
}
    
function disableq1() {
q5a1.disabled = true; 
q5a2.disabled = true; 
}
    
function disableq2 () {
q6a1.disabled = true;
q6a2.disabled = true;
q6a3.disabled = true;
q6a4.disabled = true;
}
    
function disableq1() {
q7a1.disabled = true; 
q7a2.disabled = true; 
}
    
function disableq2 () {
q8a1.disabled = true;
q8a2.disabled = true;
q8a3.disabled = true;
q8a4.disabled = true;
}
    
function disableq2 () {
q9a1.disabled = true;
q9a2.disabled = true;
q9a3.disabled = true;
q9a4.disabled = true;
}
    
function disableq2 () {
q10a1.disabled = true;
q10a2.disabled = true;
q10a3.disabled = true;
q10a4.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  
  q2a1.disabled = false; 
  q2a3.disabled = false;
  q2a4.disabled = false; 
  q2a2.disabled = false;
  
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false;
  
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q4a3.disabled = false;
  
  q5a1.disabled = false; 
  q5a2.disabled = false; 
  
  q6a1.disabled = false; 
  q6a3.disabled = false;
  q6a4.disabled = false; 
  q6a2.disabled = false;
  
  q7a1.disabled = false; 
  q7a2.disabled = false; 
  
  q8a1.disabled = false; 
  q8a3.disabled = false;
  q8a4.disabled = false; 
  q8a2.disabled = false;
  
  q9a1.disabled = false; 
  q9a3.disabled = false;
  q9a4.disabled = false; 
  q9a2.disabled = false;
  
  q10a1.disabled = false; 
  q10a3.disabled = false;
  q10a4.disabled = false; 
  q10a2.disabled = false;
