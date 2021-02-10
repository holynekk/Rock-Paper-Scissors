const result = document.getElementById("result");
const plyScore = document.getElementById("player-score");
const cmpScore = document.getElementById("computer-score");
const container = document.querySelector("body");
const choice = document.querySelectorAll("img");

let finishScreen = document.createElement('div');

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let ready = 1;

choice.forEach(img=>{
    img.addEventListener("click",()=>{
        playerChoice = img.alt;
        computerChoice = computerOutput();
        play();
    });
});

function play(){
    if(playerChoice == computerChoice){
        result.textContent = "IT'S DRAW, PLAY AGAIN!";
    }else if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "apper" || playerChoice === "paper" && computerChoice === "rock"){
        playerScore++;
        plyScore.textContent = playerScore;
        result.textContent = "YOU WIN!";
    }else{
        computerScore++;
        cmpScore.textContent = computerScore;
        result.textContent = "YOU LOST..";
    }

    if(computerScore === 3 || playerScore === 3){
        ready = 0;
        
        finishScreen.classList.add("finish");
        let retry = document.createElement('div');
        retry.classList.add("retry");
        retry.textContent = "RETRY";
        retry.addEventListener("click", restart);

        let last = document.createElement('p');
        if(computerScore === 3){
            last.classList.add("loser");
            last.textContent = "LOSER.."
        }else{
            last.classList.add("winner");
            last.textContent = "WINNER WINNER CHICKEN DINNER!"
        }
        finishScreen.appendChild(last);
        finishScreen.appendChild(retry);
        container.appendChild(finishScreen);
        

    }
}

function computerOutput(){
    let ans = Math.floor(Math.random()*3);
    switch(ans){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function restart(){
    playerScore = 0;
    plyScore.textContent = playerScore;
    computerScore = 0;
    cmpScore.textContent = computerScore;
    result.textContent = "FIGHT!";
    for(let i = 0; i < 2; i++){ finishScreen.removeChild(finishScreen.firstChild); }
    container.removeChild(finishScreen);
}

