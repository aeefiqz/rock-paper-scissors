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
    // playerSelection = playerSelection.toLowerCase();
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

        
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);


        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }



//create dom objects for respective buttons (rock,paper and scissors)
const rockbtn = document.querySelector('.btn-rock');
const paperbtn = document.querySelector('.btn-paper');
const scissorsbtn = document.querySelector('.btn-scissors');

rockbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
  });
  
paperbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
  });
  
scissorsbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
  });


//create a div for displaying results
const divResult = document.createElement('div');
divResult.id = 'result';
document.body.appendChild(divResult);

//update the contents of results div
divResult.innerHTML = `<p>Player score: ${playerScore}</p>
                       <p>Computer score: ${computerScore}</p>`;