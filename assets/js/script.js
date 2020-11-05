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






timer();