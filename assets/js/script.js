var startQuizEl = document.getElementById('start-quiz');
var quizAreaEl = document.getElementById('quiz-start');
var sec = 75;
var correctAnswer = "E";
var pageWipe = document.getElementById('questions');

var questions =[
    {question: "Commonly used datatypes DO NOT Include",
     choiceA: "strings",
     choiceB: "boolean",
     choiceC: "alerts", 
     choiceD: "numbers",
     answer: "C",
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        choiceA: "quotes",
        choiceB: "parethesis",
        choiceC: "curly brackets",
        choiceD: "square brackets",
        answer: "B", 
    },

];

function timer() {
    sec = 75;
    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML= "Time: " +sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            
           endQuiz();
            
        } else {for ( var i =0; i < questions.length; i++){
        
            createQuestion(i);
            
        }    
            
    }    
    
    },1000);
}

//start function to start timer and pop up first question
var startQuiz = function() {
    
        timer();
        pageWipe.remove();
 
};

var createQuestion = function(i) {

    quizSectionEl= document.createElement("section")
            quizSectionEl.className= "questions"
            quizSectionEl.innerHTML= "<section id='questions'</section>";
    
            quizAreaEl.appendChild(quizSectionEl);
            
            var questionSectionEl = document.createElement("div")
            questionSectionEl.className= "questions";
    
            quizSectionEl.appendChild(questionSectionEl);
    
        var questionEl = document.createElement("p");
            questionEl.textContent = questions[i].question;
    
            questionSectionEl.appendChild(questionEl);
    
            var choiceAEl = document.createElement("button");
            choiceAEl.textContent = questions[i].choiceA;
            choiceAEl.className = "btn";
            choiceAEl.id = "A";
            
            questionSectionEl.appendChild(choiceAEl);
           
            var choiceBEl = document.createElement("button");
            choiceBEl.textContent = questions[i].choiceB;
            choiceBEl.className = "btn";
            choiceBEl.id = "B";
          
            questionSectionEl.appendChild(choiceBEl);
            
            var choiceCEl = document.createElement("button");
            choiceCEl.textContent = questions[i].choiceC;
            choiceCEl.className = "btn";
            choiceCEl.id = "C";
    
            questionSectionEl.appendChild(choiceCEl);
            
            var choiceDEl = document.createElement("button");
            choiceDEl.textContent = questions[i].choiceD;
            choiceDEl.className = "btn";
            choiceDEl.id = "D";
            
            questionSectionEl.appendChild(choiceDEl);
     
            correctAnswer = questions[i].answer;
         
            
        
}


var endQuiz = function() {
            
    var scoreScreenEl =  document.createElement("div");
    scoreScreenEl.className = "questions";

    quizAreaEl.appendChild(scoreScreenEl);

    var finishMessageEl = document.createElement("p")
    finishMessageEl.textContent= "Congratulations, you have finished the quiz. You score is " + sec+".";
    
    scoreScreenEl.appendChild(finishMessageEl);
};

var checkAnswer = function (userAnswer,correctAnswer) {
    
    var userAnswer = event.target.getAttribute("id");
    var questionAnswer = correctAnswer;
    
    if( userAnswer !== correctAnswer) {
        sec = sec - 10;  
    } 
    
};

// when an answer is selected next question appears
// when there are no more remaining questions quiz ends and score is giving, highscores are recorded
// event listeners for start quiz, correct answer and wrong answers, and view high score


startQuizEl.addEventListener("click", startQuiz);
quizAreaEl.addEventListener("click", checkAnswer);
