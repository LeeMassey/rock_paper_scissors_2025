function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

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
        return res += winnerChoice + ' beats ' + loserChoice + '. ' + winner + ' wins this round! Human Score: ' + humanScore + ' | Computer Score: ' + computerScore;
    }

    while (round <= 5) {
        console.log(playRound(getComputerChoice(), getHumanChoice()));
        round++;
    }
}

playGame();