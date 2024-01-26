function getComputerChoice() {
    const choice_array = ['rock','paper','scissors'];
    return choice_array[Math.floor(Math.random() * choice_array.length)];
}
// console.log(getComputerChoice());

function round(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // computerSelection = getComputerChoice();
    console.log(`player selection : `,playerSelection);
    console.log(`Computer selection : `,computerSelection);
    if(playerSelection === computerSelection){
        console.log(`It's a tie. Try again!`);
    }
    if(computerSelection === 'rock' && playerSelection === 'scissors'){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    if(computerSelection === 'scissors' && playerSelection === 'paper'){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    if(computerSelection === 'paper' && playerSelection === 'rock'){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
    }
    if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
    }
    if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`);
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
round('roCK',getComputerChoice());
