function computerPlay() {
    let cMove = Math.random();
        if (cMove < .34) {
            cMove = 'rock';
        } else if (cMove <.64){
            cMove = 'paper';
        } else {
            cMove = 'scissors'
        }
    return(cMove);     
}

function playRound() {
    let playerChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    let computerChoice = computerPlay(); 


}

playRound();