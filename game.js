//function that outputs the choice for computer
function computerPlay(){
    //generate a random number between 1-3
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';

    // if conditions that returns either rock,paper or scissors depending random number generated
    if(random === 1){
        computerChoice = 'rock';
        console.log("%cComputer Chose: " + computerChoice, "color: Gold");
        return computerChoice;
    } else if (random === 2){
        computerChoice = 'paper';
        console.log("%cComputer Chose: " + computerChoice, "color: Gold");
        return computerChoice;
    } else {
        computerChoice = 'scissors';
        console.log("%cComputer Chose: " + computerChoice, "color: Gold");
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
            console.log("%cUser cancelled prompt", "color: violet; font-size: 13px");
            return undefined;
        }

            //if user's input is not empty
        if (input.trim() != null){
            //make their input all lowercase
            var playerChoice = input.toLowerCase();

            //verify if the playerChoice is a valid choice
            if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
                //if input is valid
                console.log("%cYou chose: " + playerChoice, "color: aqua"); // console log the value
                valid = true;
                //break out of loop just in case
                break;
            } else {
                 //display alert err msg
                alert("Incorrect Input. Please Enter A Valid Choice From Prompt.");
                valid = false;
            }
        }

    }
    //return value 
    return playerChoice;
}


// to play a single round of the game
function playRound(playerSelection, computerSelection) {
    let draw = "It's A Tie!"
    let win = "Player Wins";
    let lose = "Computer Wins";
    //if the choice chosen from both player & cpu is the same value
    if(playerSelection == computerSelection){
        //output string draw!
        return draw;

    // else if player is rock 
    } else if (playerSelection == 'rock') {
        //verify if computer chose paper
        if(computerSelection == 'paper'){
            console.log("%cYou lose! Paper beats Rock", "color: orange; font-size: 14px");
            return lose;
        } else {
            //computer answer is not paper
            console.log("%cYou Win! Rock beats Scissors", "color: Lime; font-size: 14px");
            return win;
        }
    } 

    else if (playerSelection == 'scissors') {
        if(computerSelection == 'rock'){
            console.log("%cYou lose! Rock beats Scissors", "color: orange; font-size: 14px");
            return lose;
        } else {
            console.log("%cYou Win! Scissors beats Paper", "color: Lime; font-size: 14px");
            return win;
        }
    } 
    
    else if (playerSelection == 'paper') {
        if(computerSelection == 'scissors'){
            console.log("%cYou lose! Scissors beats paper", "color: orange; font-size: 14px");
            return lose;
        } else {
            console.log("%cYou Win! Paper beats rock", "color: Lime; font-size: 14px");
            return win;
        }
    }
}

//save the choice from functions
const playerSelection = playerPlay();
const computerSelection = computerPlay();

console.log("\n")

console.log("%c" + playRound(playerSelection, computerSelection), "color: khaki");