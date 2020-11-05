var startQuizEl = document.getElementById('start-quiz');
var quizAreaEl = document.getElementById('quiz-start')

var questions =[
    {question: "Commonly used datatypes DO NOT Include",
     choiceA: "strings",
     choiceB: "boolean",
     choiceC: "alerts", 
     choiceD: "numbers",
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        choiceA: "quotes",
        choiceB: "parethesis",
        choiceC: "curly brackets",
        choiceD: "squar brackets",
    },

];

function timer() {
    var sec = 75;
    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML= "Time: " +sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            //also will need to add endgame function once we have it.
        }
    },1000);
}

//start function to start timer and pop up first question
var startQuiz = function() {
    
    timer();

    var questionSectionEl = document.createElement("div")
    questionSectionEl.className= "questions";

    quizAreaEl.appendChild(questionSectionEl);

    for ( var i =0; i<questions.length; i++){

        var questionEl = document.createElement("p");
        questionEl.textContent = questions[i].question;

        questionSectionEl.appendChild(questionEl);

        var choiceAEl = document.createElement("button");
        choiceAEl.textContent = questions[i].choiceA;

        questionSectionEl.appendChild(choiceAEl);

        var choiceBEl = document.createElement("button");
        choiceBEl.textContent = questions[i].choiceB;
        
        questionSectionEl.appendChild(choiceBEl);

        var choiceCEl = document.createElement("button");
        choiceCEl.textContent = questions[i].choiceC;

        questionSectionEl.appendChild(choiceCEl);

        var choiceDEl = document.createElement("button");
        choiceDEl.textContent = questions[i].choiceD;

        questionSectionEl.appendChild(choiceDEl);
    }

    //add endQuiz here
};
// when an answer is selected next question appears
// when there are no more remaining questions quiz ends and score is giving, highscores are recorded
// event listeners for start quiz, correct answer and wrong answers, and view high score





startQuizEl.addEventListener("click", startQuiz);