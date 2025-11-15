function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    let humanChoiceButtons = document.querySelectorAll('.human-choice-buttons');
    let results = document.querySelector('#results');

    for (const e of humanChoiceButtons) {
        e.addEventListener('click', () => {
            playRound(getComputerChoice(), e.id);
        });
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }  

    function playRound(computerChoice, humanChoice) {
        alert(computerChoice + ', ' + humanChoice);
        let res = 'Computer: ' + computerChoice + ' | Human: ' + humanChoice + ' | ';
        let winnerChoice;
        let loserChoice;
        let winner;
        if (computerChoice === humanChoice) {
            res += 'It\'s a tie! Human Score: ' + humanScore + ' | Computer Score: ' + computerScore;
        }
        else if (((computerChoice === 'rock') && (humanChoice === 'scissors')) || 
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

        if (winner) {
            res += winnerChoice + ' beats ' + loserChoice + '. ' + winner + ' wins this round! Human Score: ' + humanScore + ' | Computer Score: ' + computerScore;
        }

        results.textContent = res;

    }

//     while (round <= 5) {
//         console.log(playRound(getComputerChoice(), getHumanChoice()));
//         round++;
//     }
}

playGame();