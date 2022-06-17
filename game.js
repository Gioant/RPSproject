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

function playerPlay(){
    var valid = false;

    while (!valid){
        //prompt user for choice
        let input = prompt("Enter Rock, Paper or Scissors");
        
        //if user pressed the cancel button
        if (input === null) {
            //break out of function to allow user to exit
            console.log("%cUser cancelled prompt.", "color: violet; font-size: 14px");
            return undefined;
        }

            //if user's input is not empty
        if (input.trim() != null){
            //make their input all lowercase
            var playerChoice = input.toLowerCase();

            //verify if the playerChoice is a valid choice
            if(playerChoice != 'rock' || playerChoice != 'paper' || playerChoice != 'scissors'){
                //display alert err msg
                alert("Incorrect Input. Please Enter A Valid Choice From Prompt.");
                valid = false;
            } else {
                //else input is valid!
                console.log(playerChoice); // console log the value
                valid = true;
                //break out of loop just in case
                break;
            }
        }

    }
    //return value 
    return playerChoice;
}

// to play a single round of the game
function playRound(playerSelection, computerSelection) {
    let draw = "It's A Tie!"
    let win = "You Win. Rock Beats Scissors";
    let lose = "You Lose. Paper Beats Rock";

    if(playerSelection == computerSelection){
        return console.log(draw);
    } else if (computerSelection == 'paper') {
    }
}

const playerSelection = playerPlay();
// const computerSelection = computerPlay();



// console.log(playRound(playerSelection, computerSelection));