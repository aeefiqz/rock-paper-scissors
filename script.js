//create dom objects for respective buttons (rock,paper and scissors)
const buttons = document.querySelectorAll('.btn');
console.log(buttons);


//create a div for displaying results
const divResult = document.createElement('div');
divResult.id = 'result';
document.body.appendChild(divResult);

//update the contents of results div
function getComputerChoice() {
    // Randomly return "Rock","Paper" or "Scissors"
    //create an array for rock paper and scissors choices
    const choices = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    //get random choice
    const item = choices[randomIndex];
    return item
}   

function disableButton() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection) {
    //Play a single round of Rock Paper Scissors and return a string that declares the winner 
    // of the round
    // playerSelection = playerSelection.toLowerCase();
    let player = "";
    let computer = "";
    let result = "";
    if (playerSelection === computerSelection) {
        result = ` Draw! Player score: ${playerScore} vs Computer score: ${computerScore}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection ==='scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        player = `${playerScore}`;
    } else {
        computerScore++;
        computer = `${computerScore}`;
    
    }
    
    document.querySelector(".player").innerHTML = `Player: ${playerScore}`;
    document.querySelector(".computer").innerHTML = `Computer: ${computerScore}`;
    document.querySelector(".result").innerHTML = `Result: ${result}`;
 

    if (playerScore === 5) {
        document.querySelector(".result").innerHTML = `Player wins!`
        disableButton();
    } else if (computerScore === 5) {
        document.querySelector(".result").innerHTML = `Computer wins!`
        disableButton();
    }
}

buttons.forEach(button => {
    // for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});


