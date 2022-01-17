
let timer = 75;
let stopper = -1;
let startBtn = document.getElementById("startBtn");

let startScreen = document.getElementById("startPage");
    // QUIZ SCREEN ONE ELEMENT WITH SCREEN ONE BUTTONS
let quizScreen1 = document.getElementById("quizPage1");
    let button11 = document.getElementById("quiz1.1Btn")
    let button12 = document.getElementById("quiz1.2Btn")
    let button13 = document.getElementById("quiz1.3Btn")
    let button14 = document.getElementById("quiz1.4Btn")
     // QUIZ SCREEN TWO ELEMENT WITH SCREEN TWO BUTTONS
let quizScreen2 = document.getElementById("quizPage2");
    let button21 = document.getElementById("quiz2.1Btn")
    let button22 = document.getElementById("quiz2.2Btn")
    let button23 = document.getElementById("quiz2.3Btn")
    let button24 = document.getElementById("quiz2.4Btn")
     // QUIZ SCREEN THREE ELEMENT WITH SCREEN THREE BUTTONS
let quizScreen3 = document.getElementById("quizPage3");
let button31 = document.getElementById("quiz3.1Btn")
let button32 = document.getElementById("quiz3.2Btn")
let button33 = document.getElementById("quiz3.3Btn")
let button34 = document.getElementById("quiz3.4Btn")
     // QUIZ SCREEN FOUR ELEMENT WITH SCREEN FOUR BUTTONS
let quizScreen4 = document.getElementById("quizPage4");
    let button41 = document.getElementById("quiz4.1Btn")
    let button42 = document.getElementById("quiz4.2Btn")
    let button43 = document.getElementById("quiz4.3Btn")
    let button44 = document.getElementById("quiz4.4Btn")
     // QUIZ SCREEN FIVE ELEMENT WITH SCREEN FIVE BUTTONS
let quizScreen5 = document.getElementById("quizPage5");
    let button51 = document.getElementById("quiz5.1Btn")
    let button52 = document.getElementById("quiz5.2Btn")
    let button53 = document.getElementById("quiz5.3Btn")
    let button54 = document.getElementById("quiz5.4Btn")

let wrongPrompt = document.getElementById("wrong");
let rightPrompt = document.getElementById("right");

let endScreen = document.getElementById("endscreen");
let yourScore = document.getElementById("yourscore");
let submitButton = document.getElementById("submitBtn");

let highScore = document.getElementById("highscore");
let scoreInputs = document.getElementById("scoreinputs");

quizScreen1.style.display = "none";
quizScreen2.style.display = "none";
quizScreen3.style.display = "none";
quizScreen4.style.display = "none";
quizScreen5.style.display = "none";

wrongPrompt.style.display = "none";
rightPrompt.style.display = "none";

endScreen.style.display = "none";

highScore.style.display = "none";
// RUNS TIMER AFTER START BUTTON IS CLICKED

startBtn.addEventListener("click", function () {  
    if (startBtn) {
        setInterval(addTimer, 100);
        startScreen.style.display = "none";
        quizPage1();
    }
})

// FUNCTION TO GET TIMER TO RUN

function addTimer() {
    timer = timer - 1;
    let clock = document.getElementById("countdown")
    clock.innerHTML = timer;
    while (timer === stopper) {
        clearInterval(addTimer);
        scoreScreen();
    };
}

 function quizPage1() {
    quizScreen1.style.display = "block";
    if (button11.addEventListener ("click", function() {
        quizScreen1.style.display = "none";
        quizPage2();
    }));
    if (button12.addEventListener ("click", function() {
        quizScreen1.style.display = "none";
        quizPage2();
    }));
    if (button13.addEventListener ("click", function() {
        quizScreen1.style.display = "none";
        quizPage2();
    }));
    if (button14.addEventListener ("click", function() {
        quizScreen1.style.display = "none";
        quizPage2();
    }));
 }

 function quizPage2 () {
    
     quizScreen2.style.display = "block";
     if (button21.addEventListener ("click", function() {
        quizScreen2.style.display = "none";
        quizPage3();
    }));
    if (button22.addEventListener ("click", function() {
        quizScreen2.style.display = "none";
        quizPage3();
    }));
    if (button23.addEventListener ("click", function() {
        quizScreen2.style.display = "none";
        quizPage3();
    }));
    if (button24.addEventListener ("click", function() {
        quizScreen2.style.display = "none";
        quizPage3();
    }));
 }

 function quizPage3 () {
    
    quizScreen3.style.display = "block";
    if (button31.addEventListener ("click", function() {
       quizScreen3.style.display = "none";
       quizPage4();
   }));
   if (button32.addEventListener ("click", function() {
       quizScreen3.style.display = "none";
       quizPage4();
   }));
   if (button33.addEventListener ("click", function() {
       quizScreen3.style.display = "none";
       quizPage4();
   }));
   if (button34.addEventListener ("click", function() {
       quizScreen3.style.display = "none";
       quizPage4();
   }));
}

function quizPage4 () {
    
    quizScreen4.style.display = "block";
    if (button41.addEventListener ("click", function() {
       quizScreen4.style.display = "none";
       quizPage5();
   }));
   if (button42.addEventListener ("click", function() {
       quizScreen4.style.display = "none";
       quizPage5();
   }));
   if (button43.addEventListener ("click", function() {
       quizScreen4.style.display = "none";
       quizPage5();
   }));
   if (button44.addEventListener ("click", function() {
       quizScreen4.style.display = "none";
       quizPage5();
   }));
}

function quizPage5 () {
    
    quizScreen5.style.display = "block";
    if (button51.addEventListener ("click", function() {
       quizScreen5.style.display = "none";
       scoreScreen();
   }));
   if (button52.addEventListener ("click", function() {
       quizScreen5.style.display = "none";
       scoreScreen();
   }));
   if (button53.addEventListener ("click", function() {
       quizScreen5.style.display = "none";
       scoreScreen();
   }));
   if (button54.addEventListener ("click", function() {
       quizScreen5.style.display = "none";
       scoreScreen();
   }));
        
}

function scoreScreen () {

    endScreen.style.display = "block";
    yourScore.innerHTML = timer;
    if (submitButton.addEventListener("click", function () {
        lastScreen();
    }));
}

function lastScreen () {
    highScore.style.display = "block";
    endScreen.style.display = "none";
    scoreInputs.innerHTML = timer;
}
 // START QUIZ BUTTON ✅
    // a. upon clicking timer will start counting down ✅
    // b. upon clicking everything will dissapear except the header ✅
    // c. upon clicking quiz screen will appear on page ✅


// QUIZ PAGE 
    // a. Quiz questions appear 1 question and with 4 mutiple choice answers✅
    // b. When answer is selected the user page will either display right or wrong
    // c. when answer is selected the page will go to the next question.✅
    // d. when all questions are answered or the time runs out next screen will appear on page

// SCORECARD PAGE✅
    // a. scorecard will show a message stating "all done" with the users score.✅
    // b. user will have a button and input field to put there name into✅
    // upon clicking button user will be sent to the end screen✅

// HIGHSCORE PAGE
    //  a. the users name and score will be displayed
    //  b. a "back" button will take them back to the START QUIZ page
    //  c. a "reset" button will allow the user to clear all highscores stored.