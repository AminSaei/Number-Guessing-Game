const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`gurss a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("a valid numb plessss");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("valid please you cunt");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("too low try again");
        }
        else if(guess > answer){
            window.alert("too high try AAGAin");
        }
        else{
            window.alert(`correct, the answer was ${answer}, it took you ${attempts} to answer!`);
            running = false;
        }
    }
}