const selections = ["rock", "paper", "scissors"];
const computerPlay = () => Math.floor(Math.random() * 3);

let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').onclick = select;
document.getElementById('paper').onclick = select;
document.getElementById('scissors').onclick = select;

function select() {
  let playerSelection = this.id;
  let computerSelection = selections[computerPlay()];  
  let result = document.getElementById('result');
  result.textContent = playRound(playerSelection, computerSelection);
  if (playerScore == 5) {
    result.textContent = `You are a Winner! Player ${playerScore} / Computer ${computerScore}`;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    result.textContent = `You are a Loser! Player ${playerScore} / Computer ${computerScore}`;
    playerScore = 0;
    computerScore = 0;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `Draw! Player ${playerScore} / Computer ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "scissors" || 
      playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}. Player ${playerScore} / Computer ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "paper" && computerSelection == "rock" || 
      playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}. Player ${playerScore} / Computer ${computerScore}`;
  } 
}

