function getComputerChoice() {
  const choice_array = ["rock", "paper", "scissors"];
  return choice_array[Math.floor(Math.random() * choice_array.length)];
}
// console.log(getComputerChoice());

let computer_point = 0;
let human_point = 0;

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  // computerSelection = getComputerChoice();
  console.log(`player selection : `, playerSelection);
  console.log(`Computer selection : `, computerSelection);
  if (playerSelection === computerSelection) {
    console.log(`It's a tie. Try again!`);
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computer_point++;
  }
  if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computer_point++;
  }
  if (computerSelection === "paper" && playerSelection === "rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computer_point++;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
    human_point++;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
    human_point++;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
    human_point++;
  }
  // "You Lose! Paper beats Rock"
  // const scenarios = {
  //     "rock" : "scissors",
  //     "scissors" : "paper",
  //     "paper" : "rock",
  // }
  // console.log(scenarios[computerSelection]);
}
// round(prompt('enter your selection'),getComputerChoice());
// round("roCK", getComputerChoice());

function game() {
  // let computer_point = 0;
  // let human_point = 0;
  for (let i = 0; i < 5; i++) {
    round(prompt("enter your selection"), getComputerChoice());
  }
  console.log(`Computer's points : `,computer_point);
  console.log(`Human's points : `,human_point);
  console.log(computer_point > human_point ? `Computer WINNER!!!.` : `Human WINNER!!!.`);
}
game();
