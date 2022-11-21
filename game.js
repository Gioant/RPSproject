//get all elements with data-selection attribute
const buttons = document.querySelectorAll('.choice');

//an array of objects
const weapons = [
    {
        name: 'sword',
        beats: 'shield'
    },
    {
        name: 'shield',
        beats: 'bow'
    },
    {
        name: 'bow',
        beats: 'sword'
    }
]


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const choiceName = btn.dataset.choice;
        const choice = weapons.find(weapon => weapon.name === choiceName)
        makeSelection(choice);
    })
})



function makeSelection(choice) {
    // call function and save selection for computer
    const computerChoice = randomChoice();

    const youWin = winner(choice, computerChoice);
    const computerWin = winner(choice, computerChoice);

    //call function to verify Winner
    addSelectionResult(computerChoice, computerWin);
    addSelectionResult(choice, youWin);
}



function addResult(choice, winner){

}

//function that choices a button randomly
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}


function winner(playerChoice, computerChoice) {

    return playerChoice.beats === computerChoice.name;
}




// // to play a single round of the game
// function playRound(playerSelection, computerSelection) {
//     //creating variables
//     let draw = 'tie'
//     let playerWin = false;
//     //if the choice chosen from both player & cpu is the same value
//     if (playerSelection == computerSelection) {
//         //output string draw!
//         console.log("%c Draw!", "color: Thistle; font-size: 14px");
//         return draw;
//         // else if player is rock 
//     } else if (playerSelection == 'rock') {
//         //verify if computer chose paper
//         if (computerSelection == 'paper') {
//             console.log("%cYou lose! Paper beats Rock", "color: orange; font-size: 14px");
//             return playerWin = false;
//         } else {
//             //computer answer is not paper
//             console.log("%cYou Win! Rock beats Scissors", "color: Lime; font-size: 14px");
//             return playerWin = true;
//         }
//     }

//     //else if player chose scissors
//     else if (playerSelection == 'scissors') {
//         if (computerSelection == 'rock') {
//             console.log("%cYou lose! Rock beats Scissors", "color: orange; font-size: 14px");
//             return playerWin = false;
//         } else {
//             console.log("%cYou Win! Scissors beats Paper", "color: Lime; font-size: 14px");
//             return playerWin = true;
//         }
//     }

//     //else if player is paper
//     else if (playerSelection == 'paper') {
//         if (computerSelection == 'scissors') {
//             console.log("%cYou lose! Scissors beats paper", "color: orange; font-size: 14px");
//             return playerWin = false;
//         } else {
//             console.log("%cYou Win! Paper beats rock", "color: Lime; font-size: 14px");
//             return playerWin = true;
//         }
//     }
// }


// //call function
// game();

// // function to play 5 rounds
// function game() {
//     let wins = 0;
//     let losses = 0;
//     let draws = 0;
//     let error = false;

//     //Commented logic to play 5 rounds
//     /*
//     //loop until we reach 5 rounds
//     for (let round = 0; round < 5; round++) {
//         //call functions 
//         const playerSelection = playerPlay();
//         const computerSelection = computerPlay();

//         //verify if user cancelled or not 
//         if (playerSelection == undefined){
//             console.log("Exiting game... GoodBye!");
//             // if the playerPLay function value is undefined return undefined and break out of function
//             return undefined;
//         }

//         //output the choice made by computer to console
//         console.log("%cComputer Chose: " + computerSelection, "color: Gold");

//         //save the return value of function to a variable
//         let result = playRound(playerSelection, computerSelection);

//         //use result to check the value with certain conditions
//         if(result == true){
//             error = false;
//             wins++;
//         } else if (result == false){
//             error = false;
//             losses++;
//         } else if (result == 'tie') {
//             error = false;
//             draws++; 
//         } else if (result == undefined) {
//             error = true;
//             break;
//         }
//         console.log("\n");
//     }

//     if (!error){
//         if(wins > losses){
//             console.log("%cVictory! You Won The Battle! ", "color: Yellow; font-size: 13px");
//             return console.log("%cPlayer:" + wins + " Cpu:" + losses, "color: Yellow; font-size: 13px");
//         } else if (wins < losses) {
//             console.log("%cYou Were Defeated! Game Over!", "color: OrangeRed; font-size: 13px");
//             return console.log("%cPlayer:" + wins  + " Cpu:" + losses, "color: OrangeRed; font-size: 13px");
//         } else if (wins == losses){
//             return console.log("%cDraw! Who will win next time?", "color: Moccasin; font-size: 13px");
//         } else {
//             return console.log("Error! Something happened..")
//         }
//     } else { 
//         console.log("Error! Something happened")
//         return error;
//     }
//     */
// }