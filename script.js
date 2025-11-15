function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    let scoreDiv = document.querySelector('#score');
    let humanChoiceButtons = document.querySelectorAll('.human-choice-buttons');
    let resultsDiv = document.querySelector('#results');
    let displayWinnerDiv = document.querySelector('#display-winner');

    humanChoiceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(getComputerChoice(), button.id);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }  

    function playRound(computerChoice, humanChoice) {
        let r = 'rock';
        let p = 'paper';
        let s = 'scissors';
        let res = 'You picked ' + humanChoice + '. Computer picked ' + computerChoice + '. ';
        if (humanScore < 5 && computerScore < 5) {
            if (computerChoice === humanChoice) {
                res += 'It\'s a tie!';
                ties++;
            }
            else if ((computerChoice === r && humanChoice === s) || (computerChoice === p && humanChoice === r) || (computerChoice === s && humanChoice === p)) {
                res += computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' beats ' + humanChoice + '. Computer wins this round!';
                computerScore++;
            }
            else {
                res += humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ' beats ' + computerChoice + '. Human wins this round!';
                humanScore++;
            }
            resultsDiv.textContent = res;
            scoreDiv.textContent = 'Your score: ' + humanScore + ' | Computer score: ' + computerScore + ' | Ties: ' + ties;
            if (humanScore === 5) {
                displayWinnerDiv.textContent = 'You win!!! Game over!';
            }
            if (computerScore === 5) {
                displayWinnerDiv.textContent = 'Computer wins!!! Game Over!';
            }
        }
    }
}

playGame();