function computerPlay(){
    //generate a random number between 1-3
    let random = Math.floor(Math.random() * 3) + 1;
    //display random number to console
    console.log("random number is: " + random);
    // if conditions that returns either rock,paper or scissors depending random number generated
    if(random === 1){
        return console.log('Rock');
    } else if (random === 2){
        return console.log('Paper');
    } else {
        return console.log('Scissors');
    }
}

//call function
computerPlay();


//function to play a single round of the game
function playRound(playerSelection, computerSelection){
    
}