var containerQuestionEl = document.getElementById("question-container");
var containerStarterEl = document.getElementById("starter-container");
// diff variable name Starter
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
// high score
var formInitials = document.getElementById("initials-form");
var ViewHighScoresEl = document.getElementById("view-high-scores");
var containerHighScoreEl = document.getElementById("high-score-container");
var listHighScoreEl = document.getElementById("high-score-list");
//  correct and wrong variables missing
// buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("go-back");
var btnClearScoresEl = document.querySelector("clear-high-scores");

// question & answer & timer elements
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
timerEl.innerText = 0;
var score = 0;
var timeLeft;
var gameover


// The array questions for the quiz game
var questions = document.getElementById("question")
var arrayShuffledQuestions
var questionIndex = 0

var question = [

    {//  question 1
        question: 'How do you declare a variable in Javascript?',
        choices: ['Var', 'Let', 'Const', 'All of the above'],
        correctAnswer: 'All of the above'
    },

    {//  question 2
        question: 'Which operator is used for strict equality comparison in Javascript?',
        choices: ['==', '===', '=', '!='],
        answer: '==='
    },

    {//  question 3
        question: 'How do you write a for loop that runs 5 times in Javascript?',
        choices: ['For (i=0; <=4; i++', 'For (i=1; i<=4; i++)', 'For (i=1; i<=6; i++)', 'For(i=0; i<5; i++)' ],
        answer: 'For(i=0; i<5; i++)'
    },

    {//  question 4
        question: 'Which of the following is NOT a Javascript data type?',
        choices: ['String', 'Number', 'Boolean', 'Float'],
        answer: 'Float'
    },


]

var renderStartPage = function(){
    containerHighScoreEl.classList.add("hide")
    containerHighScoreEl.classList.remove("show")
    containerStarterEl.classList.add("show")
    containerStarterEl.classList.remove("hide")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    questionIndex = 0
    timerEl.textContent = 0
    score = 0

}

var setTime = function() {
    timeLeft = 60;

    
}

// Time is subtratcted from clock with wrong answer


// When all questions are answered or time reaches 0 the gane is over

// When game is over I can save my initials and score


// Create event listener that goes to function 1


// function 1 purpose of this is to start clock by applying the timer to it. Timer uses setInterval
// note: create clock function seperate
// hides the starter container
// shows the question container
// within the function create a callout to function 2

// function 2
// go to question array
// go to index zero 
// question[questionIndex] 
var current = question[questionIndex]
// display using textcontent line 30
questions.textContent = current.question


// fucntion 3

// create vent listener
// deduct time
// question index ++
// Do I have time left or questions left !!!harder!!