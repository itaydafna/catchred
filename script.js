var score = document.querySelector(".score"),
    currentScore = Number(score.textContent),
    redBox = document.querySelector(".red"),
    gameBoard = document.querySelector(".game-board");


//start score countdown

function scoreCountdown(event) {
    var targetClassList = event.target.classList;
    if (targetClassList[1]==="red") {
        setInterval(function () {
            currentScore -= 2;
            score.textContent = currentScore;
        }, 1000);
        gameBoard.removeEventListener('click', scoreCountdown)
    }
}


gameBoard.addEventListener('click', scoreCountdown);


//score up by 5 on catching red

function scoreUp() {
    var targetClassList = event.target.classList;
    if (targetClassList[1]==="red") {
        currentScore += 5;
        score.textContent = currentScore;
    }
}

gameBoard.addEventListener('click', scoreUp);


//score down by 5 on hitting blue


function scoreDown(event) {
    var targetClassList = event.target.classList;
    if (targetClassList[0]==="box"&&targetClassList[1]!=="red") {
        currentScore -= 5;
        score.textContent = currentScore;
    }
}

gameBoard.addEventListener('click', scoreDown);



//shuffle colors

function shuffleColors (){
    //turning red box to blue
    redBox.className = "box";
   var rand = Math.ceil((Math.random())*4),
       randBox = document.querySelector(".game-board div:nth-of-type("+rand+")");

        randBox.className ="box red";

        redBox = document.querySelector(".red")
}


function setShuffleInterval (){
    setInterval(shuffleColors,1000);
    redBox.removeEventListener('click',setShuffleInterval);

}

redBox.addEventListener('click', setShuffleInterval);

