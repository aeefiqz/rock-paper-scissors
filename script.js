function getComputerChoice() {
    // Randomly return "Rock","Paper" or "Scissors"
    //create an array for rock paper and scissors choices
    const choices = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    //get random choice
    const item = choices[randomIndex];
    return item
}   

function playRound(playerSelection,computerSelection) {
    //Play a single round of Rock Paper Scissors and return a string that declares the winner 
    // of the round
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Tie';
    }

    else if (playerSelection == 'paper') {
        if (computerSelection =='scissors') {
            return "Computer Win!";
        }else{
            return "Player Win!";
        }
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return "Computer win!";
        }else{
            return"Player win!";
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "Computer win!";
        }else{
            return "Player win!";
        }
    }
    
}
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your selection (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);

        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }


    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!")
    }

}

game();