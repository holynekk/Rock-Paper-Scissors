/* Hello World! */

function playGame(){
    let computerSelection;
    let playerSelection;

    let computerScore = 0;
    let playerScore = 0;

    let result;
    while(computerScore < 3 && playerScore < 3){
        computerSelection = computerPlay();
        playerSelection = prompt("Write your choice: ");

        result = playRound(computerSelection, playerSelection);
        console.log(result);

        if(result === "You win!"){
            playerScore++;
        }else if(result === "It's draw, play again."){
            /* Do nothing */
        }else{
            computerScore++;
        }
        console.log("Computer: " + computerScore + " You: " + playerScore);
    }
    

    if(computerScore === 3){
        return "Computer won the game!";
    }else{
        return "You won the game!"
    }
}


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
function playRound(c, p){
    
    if(c === p){
        return "It's draw, play again.";
    }else if(c === "scissors" && p === "paper" || c === "rock" && p === "scissors" || c === "paper" && p === "rock"){
        return "You lose, "+ c + " beats " + p + "!";
    }else{
        return "You win!";
    }
}



console.log(playGame());