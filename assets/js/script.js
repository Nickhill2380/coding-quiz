var startQuizEl = document.getElementById('start-quiz');
var quizAreaEl = document.getElementById('quiz-start');
var sec = 75;
var correctAnswer = "E";
var pageWipe = document.getElementById('quiz-area');
var inputCheckerEl = document.getElementById('question-area');
var userInput = 0;
var questionSectionEl = document.createElement("div");
var questionEl = document.createElement("p");
var choiceAEl = document.createElement("button");
var choiceBEl = document.createElement("button");
var choiceCEl = document.createElement("button");
var choiceDEl = document.createElement("button");

var score = 0;

var currentScores = [];


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
        choiceB: "parenthesis",
        choiceC: "curly brackets",
        choiceD: "square brackets",
        answer: "B", 
    },

    {
        question:"Who was warchief of the horde during the assault on the Broken Isles?",
        choiceA: "Vol'jin",
        choiceB: "Thrall",
        choiceC: "Garrosh",
        choiceD: "Slyvanas",
        answer: "A",
    }

];

    var timer = setInterval(function() {},1000);
  
//start function to start timer and pop up first question
var startQuiz = function() {
    
        timer = setInterval(function() {
            sec--;
            document.getElementById('timer').innerHTML= "Time: " +sec;
            if (sec === 0 ) {
                clearInterval(timer);
                
               endQuiz();
                
            } 
                
        },1000);
      
        pageWipe.remove();

            questionSectionEl = document.createElement("div");
            questionSectionEl.className= "questions";
    
            inputCheckerEl.appendChild(questionSectionEl);
    
            questionEl = document.createElement("p");
               
            questionSectionEl.appendChild(questionEl);
    
            choiceAEl = document.createElement("button");
            
            choiceAEl.className = "btn";
            choiceAEl.id = "A";
            
            questionSectionEl.appendChild(choiceAEl);
           
            choiceBEl = document.createElement("button");
            
            choiceBEl.className = "btn";
            choiceBEl.id = "B";
          
            questionSectionEl.appendChild(choiceBEl);
            
            choiceCEl = document.createElement("button");
            
            choiceCEl.className = "btn";
            choiceCEl.id = "C";
    
            questionSectionEl.appendChild(choiceCEl);
            
            choiceDEl = document.createElement("button");
            
            choiceDEl.className = "btn";
            choiceDEl.id = "D";
            
            questionSectionEl.appendChild(choiceDEl);
            createQuestion();
            
            
};

var createQuestion = function() {
            
            var i = userInput;
           
            if(i <questions.length){
            questionEl.textContent = questions[i].question;

            choiceAEl.textContent = questions[i].choiceA;

            choiceBEl.textContent = questions[i].choiceB; 

            choiceCEl.textContent = questions[i].choiceC;

            choiceDEl.textContent = questions[i].choiceD;
     
            correctAnswer = questions[i].answer;
            } else {
          
               
               endQuiz();
            }
      
              
};

var endQuiz = function() {
    
    

    score = sec;

    questionEl.remove();
    choiceAEl.remove();
    choiceBEl.remove();
    choiceCEl.remove();
    choiceDEl.remove();
    clearInterval(timer);
      
    var scoreScreenEl =  document.createElement("div");
    scoreScreenEl.className = "questions";

    quizAreaEl.appendChild(scoreScreenEl);

    var finishMessageEl = document.createElement("p")
    finishMessageEl.textContent= "Congratulations, you have finished the quiz. Your score is " + score+".";
    
    scoreScreenEl.appendChild(finishMessageEl);
        
    setTimeout(function() {userPrompt(score)},1);
};

var checkAnswer = function (event) {
     
    var userAnswer = event.target.getAttribute("id");
    var questionAnswer = correctAnswer;
    
    if( userAnswer !== questionAnswer) {
        sec = sec - 10;  
        document.getElementById('timer').innerHTML= "Time: " +sec;
       
    } 
    
    

    userInput ++;
    createQuestion();
        
};

var userPrompt = function(score) {
    
    var initialsUserInput = prompt("Your score was " + score + " Please enter your intials");
    if (!initialsUserInput) {
        alert("You need to submit your intials");
        userPrompt();
    }

   var playerInfo = {
        initials: initialsUserInput,
        highScore: score, 
    }

    createScoreBoard(playerInfo);
}

var saveHighScores =function() {
    localStorage.setItem("scores", JSON.stringify(currentScores));
}

var loadHighScores = function() {

    var storedScores = (localStorage.getItem("scores"));

    if (!currentScores ) {
    
        currentScores = [];
        return false;
    };

    storedScores = JSON.parse(storedScores);
    
    for (var i = 0; i <storedScores.length; i ++) {
        createScoreBoard(storedScores[i]);
    }

}




 var createScoreBoard = function(playerInfo) {
    
  
    var rankingsBoardEl = document.createElement("div");
    rankingsBoardEl.className = "leaderboard";
    rankingsBoardEl.innerHTML= "<h2 class='leaderheading'>Hall of Fame</h2>";
    

    var rankingsEl = document.createElement("ol");
    rankingsEl.className = "rankings";

    rankingsEl.appendChild(rankingsBoardEl);

    var positionEl = document.createElement("li");
    positionEl.className = "playerStanding";
    positionEl.textContent= playerInfo.initials + playerInfo.score
    rankingsBoardEl.appendChild(positionEl);


    currentScores.push(playerInfo);

    saveHighScores();
    
 }


 loadHighScores();

startQuizEl.addEventListener("click", startQuiz);
inputCheckerEl.addEventListener("click", checkAnswer);
