
let timer = 75;
let stopper = -1;
let startBtn = document.getElementById("startBtn");
let startScreen = document.getElementById("startPage");
let quizScreen = document.getElementById("quizPage");

quizScreen.style.display = "none";

// RUNS TIMER AFTER START BUTTON IS CLICKED

startBtn.addEventListener("click", function () {  
    if (startBtn) {
        setInterval(addTimer, 1000);
        startScreen.style.display = "none";
        quizPage();
    }
})

// FUNCTION TO GET TIMER TO RUN

function addTimer() {
    timer = timer - 1;
    let clock = document.getElementById("countdown")
    clock.innerHTML = timer;
    while (timer === stopper) {
        clearInterval(addTimer);
    }
}

 function quizPage() {
    quizScreen.style.display = "block";
 }
 // START QUIZ BUTTON ✅
    // a. upon clicking timer will start counting down ✅
    // b. upon clicking everything will dissapear except the header ✅
    // c. upon clicking quiz screen will appear on page ✅


// QUIZ PAGE 
    // a. Quiz questions appear 1 question and with 4 mutiple choice answers
    // b. When answer is selected the user page will either display right or wrong
    // c. when answer is selected the page will go to the next question.
    // d. when all questions are answered or the time runs out next screen will appear on page

// SCORECARD PAGE
    // a. scorecard will show a message stating "all done" with the users score, correct questions, and incorrect questions.
    // b. user will have a button and input field to put there name into
    // upon clicking button user will be sent to the end screen

// HIGHSCORE PAGE
    //  a. the users name and score will be displayed
    //  b. a "back" button will take them back to the START QUIZ page
    //  c. a "reset" button will allow the user to clear all highscores stored.