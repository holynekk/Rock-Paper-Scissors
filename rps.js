/* Hello World! */
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".weapon");


buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        playerSelection = button.textContent.toLocaleLowerCase();
        playRound(computerPlay(), playerSelection);
    });
});



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

function showWinner(){
    const par = document.querySelector(".result");
    if(computerScore > playerScore){
        par.textContent = "YOU LOST!"
    }else{
        par.textContent = "YOU WON!"
    }
}

function restart(){
    playerScore = 0;
    computerScore = 0;
    let content = document.querySelector(".playersc");
    content.textContent = "Player: "+playerScore;
    content = document.querySelector(".computersc");
    content.textContent = computerScore+" :Computer";
    content = document.querySelector(".result");
    content.textContent = "So you wanna continue.. Interesting! Let's fight!"
}

function playRound(c, p){
    const par = document.querySelector(".result");
    let score;
    if(c === p){
        par.textContent = "It's draw, play again.";
    }else if(c === "scissors" && p === "paper" || c === "rock" && p === "scissors" || c === "paper" && p === "rock"){
        computerScore++;
        par.textContent = "You lose, "+ c + " beats " + p + "!";
        score = document.querySelector(".computersc");
        score.textContent = computerScore+" :Computer";
    }else{
        playerScore++;
        par.textContent = "You win!";
        score = document.querySelector(".playersc");
        score.textContent = "Player: "+playerScore;
    }
    if(computerScore > 2 || playerScore > 2){
        showWinner();
        const board = document.querySelector(".game-board")
        let retry = document.createElement('button');
        retry.textContent = "RETRY!";
        board.appendChild(retry);
        retry.addEventListener("click",()=>{
            restart();
        });

    }else;
}

