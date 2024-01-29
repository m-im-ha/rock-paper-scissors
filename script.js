// function getComputerChoice() {
//   const choice_array = ["rock", "paper", "scissors"];
//   return choice_array[Math.floor(Math.random() * choice_array.length)];
// }
// console.log(getComputerChoice());

// let computer_point = 0;
// let human_point = 0;

// function round(playerSelection, computerSelection) {
//   playerSelection = playerSelection.toLowerCase();
//   // computerSelection = getComputerChoice();
//   console.log(`player selection : `, playerSelection);
//   console.log(`Computer selection : `, computerSelection);
//   if (playerSelection === computerSelection) {
//     console.log(`It's a tie. Try again!`);
//   }
//   if (computerSelection === "rock" && playerSelection === "scissors") {
//     console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//     computer_point++;
//   }
//   if (computerSelection === "scissors" && playerSelection === "paper") {
//     console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//     computer_point++;
//   }
//   if (computerSelection === "paper" && playerSelection === "rock") {
//     console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//     computer_point++;
//   }
//   if (playerSelection === "rock" && computerSelection === "scissors") {
//     console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
//     human_point++;
//   }
//   if (playerSelection === "scissors" && computerSelection === "paper") {
//     console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
//     human_point++;
//   }
//   if (playerSelection === "paper" && computerSelection === "rock") {
//     console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
//     human_point++;
//   }
//   // "You Lose! Paper beats Rock"
//   // const scenarios = {
//   //     "rock" : "scissors",
//   //     "scissors" : "paper",
//   //     "paper" : "rock",
//   // }
//   // console.log(scenarios[computerSelection]);
// }
// round(prompt('enter your selection'),getComputerChoice());
// round("roCK", getComputerChoice());

// function game() {
//   for (let i = 0; i < 5; i++) {
//     round(prompt("enter your selection"), getComputerChoice());
//   }
//   console.log(`Computer's points : `,computer_point);
//   console.log(`Human's points : `,human_point);
//   console.log(computer_point > human_point ? `Computer WINNER!!!.` : `Human WINNER!!!.`);
// }
// game();

const buttons = document.querySelectorAll("button");
let round_winner = document.querySelector("h3");
let game_winner = document.querySelector("h2");
let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let computer_point = 0;
let human_point = 0;
let score = 3;

function getComputerChoice() {
  const choice_array = ["rock", "paper", "scissor"];
  return choice_array[Math.floor(Math.random() * choice_array.length)];
}

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(`player selection : `, playerSelection);
  console.log(`Computer selection : `, computerSelection);
  if (playerSelection === computerSelection) {
    console.log(`It's a tie. Try again!`);
    round_winner.textContent = `It's a tie. Try again!`;
    human_point = human_point;
    computer_point = computer_point;
    computer.textContent = computer_point;
    human.textContent = human_point;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    round_winner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computer_point++;
    computer.textContent = computer_point;
    human.textContent = human_point;
    if (computer_point === score) {
      console.log(`Computer Won 🎉🎉🎉`);
      game_winner.textContent = `Computer Won 🎉🎉🎉`;
    }
  } else {
    console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
    round_winner.textContent = `Computer Lose! ${playerSelection} beats ${computerSelection}`;
    human_point++;
    human.textContent = human_point;
    computer.textContent = computer_point;
    if (human_point === score) {
      console.log(`human Won 🎉🎉🎉`);
      game_winner.textContent = `human Won 🎉🎉🎉`;
    }
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     round(prompt("enter your selection"), getComputerChoice());
//   }
//   console.log(`Computer's points : `,computer_point);
//   console.log(`Human's points : `,human_point);
//   console.log(computer_point > human_point ? `Computer WINNER!!!.` : `Human WINNER!!!.`);
// }

buttons.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", () => {
    const player_choose = btn.classList.value;
    // console.log(player_choose);

    round(player_choose, getComputerChoice());

    console.log(`Computer's points : `, computer_point);
    console.log(`Human's points : `, human_point);
    console
      .log
      // computer_point > human_point ? `Computer WINNER!!!.` : `Human WINNER!!!.`
      ();
  });
});
