var startQuizEl = document.getElementById('start-quiz');
var quizAreaEl = document.getElementById('quiz-start');
var sec = 75;
var questNumber = 0;


var questions =[
    {question: "Commonly used datatypes DO NOT Include",
     choiceA: "strings",
     choiceB: "boolean",
     choiceC: "alerts", 
     choiceD: "numbers",
     answer: "C",
     selected:" "
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        choiceA: "quotes",
        choiceB: "parethesis",
        choiceC: "curly brackets",
        choiceD: "square brackets",
        answer: "B",
        selected: " "
    },

];

function timer() {
    sec = 75;
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

    var pageWipe = document.getElementById('questions');
    

    for ( var i =0; i < questions.length; i++){
        
        pageWipe.remove();
        
        var questionSectionEl = document.createElement("div")
        questionSectionEl.className= "questions";

        quizAreaEl.appendChild(questionSectionEl);

    var questionEl = document.createElement("p");
        questionEl.textContent = questions[questNumber].question;

        questionSectionEl.appendChild(questionEl);

        var choiceAEl = document.createElement("button");
        choiceAEl.textContent = questions[questNumber].choiceA;
        choiceAEl.className = "btn";
        choiceAEl.id = "A";
        
        questionSectionEl.appendChild(choiceAEl);
       
        var choiceBEl = document.createElement("button");
        choiceBEl.textContent = questions[questNumber].choiceB;
        choiceBEl.className = "btn";
        choiceBEl.id = "B";
      
        questionSectionEl.appendChild(choiceBEl);
        
        var choiceCEl = document.createElement("button");
        choiceCEl.textContent = questions[questNumber].choiceC;
        choiceCEl.className = "btn";
        choiceCEl.id = "C";

        questionSectionEl.appendChild(choiceCEl);
        
        var choiceDEl = document.createElement("button");
        choiceDEl.textContent = questions[questNumber].choiceD;
        choiceDEl.className = "btn";
        choiceDEl.id = "D";

        questionSectionEl.appendChild(choiceDEl);

    }

    //add endQuiz here
};



/*var questionAsker = function(questNumber) {

    
    var questionSectionEl = document.createElement("div")
    questionSectionEl.className= "questions";

    quizAreaEl.appendChild(questionSectionEl);

    var questionEl = document.createElement("p");
        questionEl.textContent = questions[questNumber].question;

        questionSectionEl.appendChild(questionEl);

        var choiceAEl = document.createElement("button");
        choiceAEl.textContent = questions[questNumber].choiceA;
        

        questionSectionEl.appendChild(choiceAEl);
       
        var choiceBEl = document.createElement("button");
        choiceBEl.textContent = questions[questNumber].choiceB;
      
        
        questionSectionEl.appendChild(choiceBEl);
        
        var choiceCEl = document.createElement("button");
        choiceCEl.textContent = questions[questNumber].choiceC;
        
        

        questionSectionEl.appendChild(choiceCEl);
        
        var choiceDEl = document.createElement("button");
        choiceDEl.textContent = questions[questNumber].choiceD;
        

        questionSectionEl.appendChild(choiceDEl);
        
}*/


    var checkAnswer = function (event) {
        var answer = event.target.getAttribute("id");
        
    };
// when an answer is selected next question appears
// when there are no more remaining questions quiz ends and score is giving, highscores are recorded
// event listeners for start quiz, correct answer and wrong answers, and view high score





startQuizEl.addEventListener("click", startQuiz);
quizAreaEl.addEventListener("click", checkAnswer);
