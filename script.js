let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt('Rock, Paper, or Scissors?');
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    let res = 'Computer: ' + computerChoice + ' | Human: ' + humanChoice + ' | ';
    let winnerChoice;
    let loserChoice;
    let winner;
    if (computerChoice === humanChoice) {
        return res += 'It\'s a tie! Human Score: ' + humanScore + ' | Computer Score: ' + computerScore;
    }
    if (((computerChoice === 'rock') && (humanChoice === 'scissors')) || 
        ((computerChoice === 'paper') && (humanChoice === 'rock')) || 
        ((computerChoice === 'scissors') && (humanChoice === 'paper'))) {
            winnerChoice = computerChoice;
            loserChoice = humanChoice;
            winner = 'Computer';
            computerScore++;
    }
    else {
        loserChoice = computerChoice;
        winnerChoice = humanChoice;
        winner = 'Human';
        humanScore++;
    }
    return res += winnerChoice + ' beats ' + loserChoice + '. ' + winner + ' wins! Human Score: ' + humanScore + ' | Computer Score: ' + computerScore;
}

const log = playRound(getComputerChoice(), getHumanChoice());

console.log(log);