/* Hello World! */

function computerPlay(){
    let num = Math.floor(Math.random()*3);

    switch(num){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function playGame(c, p){
    
    if(c === p){
        return "It's draw, play again.";
    }else if(c === "scissors" && p === "paper" || c === "rock" && p === "scissors" || c === "paper" && p === "rock"){
        return "You lose, "+ c + " beats " + p + "!";
    }else{
        return "You win!";
    }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Write your choice: ");

console.log(playGame(computerSelection.toLocaleLowerCase(), playerSelection.toLocaleLowerCase()));