function computerPlay(){
    //generate a random number between 1-3
    let random = Math.floor(Math.random() * 3) + 1;
    console.log("random number is: " + random);
    if(random === 1){
        return console.log('Rock');
    } else if (random === 2){
        return console.log('Paper');
    } else {
        return console.log('Scissors');
    }
}

computerPlay();