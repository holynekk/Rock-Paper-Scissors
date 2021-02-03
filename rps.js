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
        console.log("It's draw, play again.");
    }else if(c === "scissors" && p === "paper"){
        console.log("Computer Win");
    }else if(c === "rock" && p === "scissors"){
        console.log("Computer Win");
    }else if(c === "paper" && p === "rock"){
        console.log("Computer Win");
    }else{
        console.log("You Win");
    }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Write your choice(rock-paper-scissors) : ");

playGame(computerSelection, playerSelection);