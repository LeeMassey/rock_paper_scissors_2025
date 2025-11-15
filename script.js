function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    const scoreDiv = document.querySelector('#score');
    const humanChoiceButtons = document.querySelectorAll('.human-choice-buttons');
    const humanChoiceDiv = document.querySelector('#human-choice');
    const computerChoiceDiv = document.querySelector('#computer-choice');
    const roundResultDiv = document.querySelector('#round-result');
    const displayWinnerDiv = document.querySelector('#display-winner');

    humanChoiceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function updateScore() {
        scoreDiv.textContent = 'Your score: ' + humanScore + ' | Computer score: ' + computerScore + ' | Ties: ' + ties;
    }

    function updateResultsDiv(humanChoice, computerChoice, roundResult) {
        if (humanChoice && computerChoice) {
            humanChoiceDiv.textContent = 'You picked: ' + humanChoice;
            computerChoiceDiv.textContent = 'Computer picked: ' + computerChoice;
        }
        else {
            humanChoiceDiv.textContent = '';
            computerChoiceDiv.textContent = '';
        }
        roundResultDiv.textContent = roundResult;
    }

    function reset() {
        humanScore = 0;
        computerScore = 0;
        ties = 0;
        updateScore();
        updateResultsDiv(undefined, undefined, 'Make your choice to start the game!');
        displayWinnerDiv.textContent = '';
        disableButtons(false);
    }

    function displayWinner(msg) {
        displayWinnerDiv.textContent = msg;
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Play Again';
        resetButton.addEventListener('click', reset);
        displayWinnerDiv.appendChild(resetButton);
    }

    function disableButtons(flag) {
        humanChoiceButtons.forEach((button) => {
            button.disabled = flag;
        });
    }

    function checkWinner() {
        if (humanScore === 5) {
            displayWinner('You win!!! Game Over!');
            disableButtons(true);
        }
        if (computerScore === 5) {
            displayWinner('Computer wins!!! Game Over!');
            disableButtons(true);
        }
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function playRound(humanChoice, computerChoice) {
        let r = 'rock';
        let p = 'paper';
        let s = 'scissors';
        let roundResult = '';
        if (humanScore < 5 && computerScore < 5) {
            if (humanChoice === computerChoice) {
                roundResult = 'It\'s a tie!';
                ties++;
            }
            else if ((computerChoice === r && humanChoice === s) || (computerChoice === p && humanChoice === r) || (computerChoice === s && humanChoice === p)) {
                roundResult = capitalize(computerChoice) + ' beats ' + humanChoice + '. Computer wins this round!';
                computerScore++;
            }
            else {
                roundResult = capitalize(humanChoice) + ' beats ' + computerChoice + '. Human wins this round!';
                humanScore++;
            }

            updateResultsDiv(humanChoice, computerChoice, roundResult);
            updateScore();
            checkWinner();
        }
    }

    updateScore();
    updateResultsDiv(undefined, undefined, 'Make your choice to start the game!');
}

playGame();