const selections = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return selections[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "scissors" ||
      playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}. Player ${playerScore} / Computer ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper") {
      playerScore += 1;
      return `You Win! ${playerSelection} beats ${computerSelection}. Player ${playerScore} / Computer ${computerScore}`;
  } else if (playerSelection == computerSelection) {
      return `Draw! Player ${playerScore} / Computer ${computerScore}`;
  } else {
      return 'THAT AINT COUNT!!!';
  }
}

function game() {
  playerSelection = prompt().toLowerCase();
  computerSelection = computerPlay();
  playRound();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt().toLowerCase();
  computerSelection = computerPlay();
  playRound();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt().toLowerCase();
  computerSelection = computerPlay();
  playRound();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt().toLowerCase();
  computerSelection = computerPlay();
  playRound();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt().toLowerCase();
  computerSelection = computerPlay();
  playRound();
  console.log(playRound(playerSelection, computerSelection));

  if (playerScore > computerScore) {
    return `You are the Winner! Player ${playerScore} / Computer ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `You are the Loser! Player ${playerScore} / Computer ${computerScore}`;
  } else {
    return `You are the Drawer! Player ${playerScore} / Computer ${computerScore}`;
  }
}

console.log(game());