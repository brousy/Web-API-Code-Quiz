// buttons

// questions and answers elements
var questionIndex= 0
var questions= document.getElementById("questions")

// The array questions for the quiz game
var question= [
    {
        question: '',
        choices: [],
        answer: ''
    },

]

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
var current= question[questionIndex]
// display using textcontent line 30
questions.textContent= current.question


// fucntion 3

// create vent listener
// deduct time
// question index ++
// Do I have time left or questions left !!!harder!!