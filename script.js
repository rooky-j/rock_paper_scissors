//Scores
    let playerScore = 0,
        computerScore = 0,
        playerChoice = '',
        computerChoice = computerPlay();

//Function to randomly decide Computer's Move
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

//Function for Each Round
function playRound(pChoice, cChoice) {
        playerChoice = prompt('Rock, Paper or Scissors?');
        playerChoice = playerChoice.toLowerCase(); 
        computerChoice = computerPlay();
    //Draw if both choices are equal
        if  (playerChoice === computerChoice) {
        winner = "It's a tie";
        console.log('Player chose ' + playerChoice);
        console.log('Computer chose ' + computerChoice);
        console.log('It\'s a draw!');
        console.log('Player\'s Score is:... ' + playerScore + '    Computer\'s Score is:... ' + computerScore)
    //Rules for Player Win
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'|| playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        console.log('Player chose ' + playerChoice);
        console.log('Computer chose ' + computerChoice);
        console.log('Player Wins!');
        console.log('Player\'s Score is:... ' + playerScore + '   Computer\'s Score is:... ' + computerScore);
    //Rules for Computer Win
    } else if (playerChoice === 'rock' && computerChoice === 'paper'|| playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log('Player chose '+ playerChoice);
        console.log('Computer chose ' + computerChoice);
        console.log('Computer Wins!');
        console.log('Player\'s Score is:... ' + playerScore + '    Computer\'s Score is:... ' + computerScore);
    //Message if Player hasn't entered Rock, Paper or Scissors
    } else {
        console.log('Please choose \'Rock, Paper or Scissors\'...');
    }
}

function game(){
     
    //Start Round
    while (playerScore < 5 || computerScore < 5) {
        playRound(playerChoice, computerChoice); 
        
        //Win Conditions
        if (playerScore === 5) {
            console.log('Player Wins!');
            console.log('Final Score:   Player:... ' + playerScore + '   Computer:... ' + computerScore);
            break;
            }
        if (computerScore === 5) {
            console.log('Computer wins :(');
            console.log('Final Score:   Player:... ' + playerScore + '   Computer:... ' + computerScore);
            break; 
            }
    }
}

//Run Game 
game();