var scoreP1 = 0;
var scoreP2 = 0;
var activePlayer = 1;
var roundScore = 0;
var playing = true;

function rollTheDice() {
    if (playing) {
        var dice = Math.floor(Math.random() * 6) + 1;

        document.querySelector("#dice").style.display = 'block';
        document.querySelector("#dice").setAttribute("src", "images/dice-" + dice + ".svg");
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector("#currentScoreP" + activePlayer).textContent = roundScore;
        } else {
            document.querySelector("#player-" + activePlayer + "-side .current-score-container").classList.add('shake-it')
            document.querySelector("#dice").classList.add('shake-it');
            nextPlayer();
        }
    }
}

function nextPlayer() {
    if (playing) {
        setTimeout(() => {
            document.querySelector("#currentScoreP" + activePlayer).classList.remove('shake-it')
            document.querySelector("#dice").classList.remove('shake-it');
        }, 1000)

        document.querySelector("#currentScoreP" + activePlayer).textContent = 0;
        document.querySelector("#player-" + activePlayer + "-side").classList.remove("active");

        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        document.querySelector("#player-" + activePlayer + "-side").classList.add("active");

        roundScore = 0;
    }
}

function holdPoints() {
    if (playing) {     
        var activePlayerScore = activePlayer === 1 ? scoreP1 += roundScore : scoreP2 += roundScore;

        document.querySelector("#dice").style.display = 'none';
        document.querySelector("#scoreP" + activePlayer).textContent = activePlayerScore;

        if (activePlayerScore >= 100){
            document.querySelector("#player-" + activePlayer + "-side").classList.remove("active");
            document.querySelector("#player-" + activePlayer + "-side").classList.add("winner");
            document.querySelector("#player-" + activePlayer + "-name").textContent = "You win !";

            playing = false;
        }
        
        nextPlayer();
    }
}

function newGame() {
    document.querySelector("#player-" + activePlayer + "-side").classList.remove("winner", "active");
    document.querySelector("#player-" + activePlayer + "-name").textContent = "Player " + activePlayer;

    scoreP1 = 0;
    scoreP2 = 0;
    roundScore = 0;
    activePlayer = 1;
    playing = true;

    document.querySelector("#player-1-side").classList.add("active");
    document.querySelector("#scoreP1").textContent = 0;
    document.querySelector("#scoreP2").textContent = 0;
    document.querySelector("#currentScoreP1").textContent = 0;
    document.querySelector("#currentScoreP2").textContent = 0;
    document.querySelector("#dice").style.display = "none";
}