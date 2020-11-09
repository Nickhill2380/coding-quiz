var currentScores = [];
var inputCheckerEl = document.getElementById('question-area');

var loadHighScores = function() {

    var storedScores = (localStorage.getItem("scores"));

    if (!storedScores) {
    
        currentScores = [];
        return false;
    };

    storedScores = JSON.parse(storedScores);
    
    storedScores.sort(compare);
    
    for (var i = 0; i <storedScores.length; i ++) {
        createScoreBoard(storedScores[i]);
    }
 
    showPlayerRankings(currentScores);
}


var showPlayerRankings = function (currentScores) {   

    var rankingsBoardEl = document.createElement("div");
    rankingsBoardEl.className = "leaderboard";
    rankingsBoardEl.innerHTML= "<h2 class='leaderheading'>Hall of Fame</h2>";
    
    inputCheckerEl.appendChild(rankingsBoardEl);

    for(var i = 0; i< currentScores.length; i++){
   
    var rankingsEl = document.createElement("ol");
    rankingsEl.className = "rankings";
    rankingsBoardEl.appendChild(rankingsEl);

    var positionEl = document.createElement("li");
    positionEl.className = "playerStanding";
    positionEl.textContent= currentScores[i].initials + " " + currentScores[i].highScore;
    rankingsEl.appendChild(positionEl);
    }
}

var compare = function(a,b) {
    var scoreA = parseInt(a.highScore);
    var scoreB = parseInt(b.highScore);

    var comparison = 0;
    if (scoreA < scoreB) {
        comparison =1;
    } else if (scoreA>scoreB) {
        comparison = -1;
    }
    return comparison;
    }


var createScoreBoard = function(playerInfo) {
    
    
    
    currentScores.push(playerInfo);

    saveHighScores();
};

var saveHighScores =function() {
    localStorage.setItem("scores", JSON.stringify(currentScores));
}

loadHighScores();

