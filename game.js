//get all elements with data-selection attribute
const buttons = document.querySelectorAll('.choice');

const shieldBtn = document.querySelectorAll('.choice')[1];
const bowBtn = document.querySelectorAll('.choice')[2];

//get icons
const icons = document.querySelectorAll('[data-icons]');


//get playerScore & computerScore
let computerScore = document.querySelector('[data-computerScore]');
let playerScore = document.querySelector('[data-playerScore]');

//to display weapon from both cpu & player choices
const playerWeapon = document.querySelector('[data-playerWeapon]');
const cpuWeapon = document.querySelector('[data-cpuWeapon]');

// to change Headers 
const scoreTitle = document.getElementById('scoreTitle');
const scoreMsg = document.getElementById('scoreMsg');
const scoreDiv = document.getElementById('test');


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
        var choiceName = btn.dataset.choice;
        var choice = weapons.find(weapon => weapon.name === choiceName);

        //remove potential class Names 
        playerWeapon.classList.remove("fa-duotone", "fa-question", "fa-sword", "fa-shield-quartered", "fa-bow-arrow");

        //display a icon depending on weapon chosen by Player
        switch (choiceName) {
            case 'sword':
                playerWeapon.classList.add("fa-duotone", "fa-sword");
                cpuWeapon.style.color = "revert";

                break
            case 'shield':
                playerWeapon.classList.add("fa-duotone", "fa-shield-quartered");
                playerWeapon.style.color = "crimson";
                break
            case 'bow':
                playerWeapon.classList.add("fa-duotone", "fa-bow-arrow");
                playerWeapon.style.color = "cyan";
                break
        }

        createChoice(choice);
    })
})



function createChoice(choice) {
    // call function and save selection for computer
    const computerChoice = randomChoice();

    //remove potential class Names 
    cpuWeapon.classList.remove("fa-duotone", "fa-question", "fa-sword", "fa-shield-quartered", "fa-bow-arrow");

    //display a icon depending on weapon chosen by CPU
    switch (computerChoice.name) {
        case 'sword':
            cpuWeapon.classList.add("fa-duotone", "fa-sword");
            cpuWeapon.style.color = "revert";
            break
        case 'shield':
            cpuWeapon.classList.add("fa-duotone", "fa-shield-quartered");
            cpuWeapon.style.color = "crimson";
            break
        case 'bow':
            cpuWeapon.classList.add("fa-duotone", "fa-bow-arrow");
            cpuWeapon.style.color = "cyan";
            break
    }

    //get the winner for both player & computer based on their choice of weapon
    const youWin = winner(choice, computerChoice);
    const computerWin = winner(computerChoice, choice);


    //increment score based on who won
    if (youWin) {
        let newWord = choice.name.charAt(0).toUpperCase() + choice.name.slice(1);
        scoreMsg.innerText = "You Chose " + newWord + " That Beats The CPU's " + computerChoice.name;

        scoreTitle.innerText = "You Won!";
        incrementScore(playerScore);
    }

    if (computerWin) {
        let newWord = computerChoice.name.charAt(0).toUpperCase() + computerChoice.name.slice(1);
        scoreMsg.innerText = "Computer Chose " + newWord + " That Beats Your " + choice.name;

        scoreTitle.innerText = "You Lost!";
        incrementScore(computerScore);
    }

    //whenever a sore reaches 5 first
    if (parseInt(playerScore.innerText) === 5 || parseInt(computerScore.innerText) === 5) {
        buttons.forEach(btn => {
            btn.disabled = true;
        })

        icons.forEach(i => {
            i.style.color = "unset";
        })

        if (parseInt(playerScore.innerText) === 5) {
            scoreTitle.innerText = "Congratulations! You Win.";
        } else {
            scoreTitle.innerText = "Game Over! You Lose."
        }

        scoreMsg.innerText = "Play Again?";


        //create restart button
        let restartBtn = document.createElement('button');
        restartBtn.classList.add("ui", "blue", "button");
        restartBtn.innerText = "Restart";
        restartBtn.style.margin = "0";
        restartBtn.style.marginBottom = "5%";
        restartBtn.style.display = "initial";
        scoreDiv.insertBefore(restartBtn, scoreMsg.nextSibling);


        //add click event listener to button
        restartBtn.addEventListener('click', function (event) {
            playerWeapon.classList.remove("fa-duotone", "fa-question", "fa-sword", "fa-shield-quartered", "fa-bow-arrow");
            cpuWeapon.classList.remove("fa-duotone", "fa-question", "fa-sword", "fa-shield-quartered", "fa-bow-arrow");

            playerScore.innerText = 0;
            computerScore.innerText = 0;
            buttons.forEach(btn => {
                btn.disabled = false;
            })
            //add proper colors back
            shieldBtn.style.color = "crimson";
            bowBtn.style.color = "cyan";

            playerWeapon.classList.add("fa-duotone", "fa-question");
            playerWeapon.style.color = "unset";

            cpuWeapon.classList.add("fa-duotone", "fa-question");
            cpuWeapon.style.color = "unset";

            scoreTitle.innerText = "Pick Your Weapon";
            scoreMsg.innerText = "First To Reach 5 Points Wins!";
            //remove restart button after
            restartBtn.style.display = "none";
        });
    }
}

//function to increment score
function incrementScore(scores) {
    //convert string into number and + 1
    scores.innerText = parseInt(scores.innerText) + 1;
}


//function where Computer chooses a weapon randomly
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}


//check winner 
function winner(playerChoice, computerChoice) {
    if (playerChoice.name === computerChoice.name) {
        scoreTitle.innerText = "Draw!";
        scoreMsg.innerText = "Both Of You Chose Same Weapon"
    }
    return playerChoice.beats === computerChoice.name;
}


