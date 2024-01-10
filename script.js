function getComputerChoice() {
  let array = ["rock", "paper", "scissor"];
  return array[Math.floor(Math.random() * array.length)];
}
// let computerChoice = getComputerChoice();
// console.log(output);

function playRound(playerSelection, computerSelection) {
    // ensure case-insensitive
    playerSelection = playerSelection.toLowerCase();

    //Ties
    while(playerSelection == computerSelection){
        computerSelection = getComputerChoice();
        console.log("Ties!! play again.");
    }

    let winnerConditions = {
        rock : "scissor",
        paper : "rock",
        scissore : "paper"
    }

    const winner = winnerConditions[playerSelection] == computerSelection ? `You won!!! ${playerSelection} beats ${computerSelection}` : `Computer won!!! ${playerSelection} beats ${computerSelection}`;
    return winner;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection,computerSelection));


