const humanScore = 0;
const computerScore = 0; 

function computerMove() {
    var computerMove = Math.random();
        if (computerMove < .34) {
            return "Rock";
        } else if (computerMove <.64) {
            return "Paper";
        } else 
            return "Scissors";
}

function playerMove() {
    var playerMove = prompt("Rock, Paper, or Scissors?");
    playerMove = playerMove.toLowerCase;
}

const playerSelection = playerMove(); 
const computerSelection = computerMove(); 

function playRound(playerSelection, computerSelection) {
    switch (playerSelection, computerSelection) {
        case 1:
            playerSelection == computerSelection;
            return "It's a tie!"
    }
}

playRound();