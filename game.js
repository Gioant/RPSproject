//get all elements with data-selection attribute
const buttons = document.querySelectorAll('.choice');

//get playerScore & computerScore
const computerScore = document.querySelector('[data-computerScore]');
const playerScore = document.querySelector('[data-playerScore]');


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

// add event listener for each button
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

    //get the winner for both player & computer based on their choice of weapon
    const youWin = winner(choice, computerChoice);
    const computerWin = winner(computerChoice, choice);


    //increment score based on who won
    if (youWin) {
        incrementScore(playerScore)
    }

    if (computerWin) {
        incrementScore(computerScore)
    }
}


function incrementScore(scores) {
    //convert string into number and + 1
    scores.innerText = parseInt(scores.innerText) + 1;
}

//add result to page
// function addResult(choice, winner) {
// }

//function that choices a button randomly
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}


//check winner 
function winner(playerChoice, computerChoice) {
    return playerChoice.beats === computerChoice.name;
}


