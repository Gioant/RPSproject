//function that outputs the choice for computer
function computerPlay(){
    //generate a random number between 1-3
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';

    // if conditions that returns either rock,paper or scissors depending random number generated
    if(random === 1){
        computerChoice = 'rock';
        console.log("Computer Chose: " + computerChoice);
        return computerChoice;
    } else if (random === 2){
        computerChoice = 'paper';
        console.log("Computer Chose: " + computerChoice);
        return computerChoice;
    } else {
        computerChoice = 'scissors';
        console.log("Computer Chose: " + computerChoice);
        return computerChoice;
    }
}


// to play a single round of the game
function playRound(playerSelection, computerSelection) {
    let draw = "It's A Tie!"
    let win = "You Win. Rock Beats Scissors";
    let lose = "You Lose. Paper Beats Rock";

    if(playerSelection == computerSelection){
        return draw;
    } else if (computerSelection == 'paper') {
    }
}

const computerSelection = computerPlay();



// console.log(playRound(playerSelection, computerSelection));