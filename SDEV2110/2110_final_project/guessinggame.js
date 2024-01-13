const container = document.querySelector('#guessingGame');
const form = document.querySelector('.guess-form');
const guessField = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const result = document.querySelector('.guessingResult');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = null;
let numGuesses = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    numGuesses += 1;
    userGuess = Number(guessField.value);
    guessField.value = null;

    // display previous guesses
    if (numGuesses == 1) {
        guesses.innerHTML = `Previous guesses: ${userGuess}  `;
    } else {
        guesses.innerHTML += `${userGuess}  `;
    }

    checkGuess();
});

function gameOver() {
    guessField.disabled = true;
    const resetButton = document.createElement('button');
    container.appendChild(resetButton);
    resetButton.innerHTML = 'Start new game';
    resetButton.focus();
    resetButton.addEventListener('click', e => {
        resetButton.parentNode.removeChild(resetButton);
        resetGame();
    });
}

function resetGame() {
    guessField.disabled = false;
    guessField.value = null;
    guesses.innerHTML = '';
    result.innerHTML = '';
    result.classList.remove('justRight', 'tooMany');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
    guessField.focus();
}

function checkGuess() {
    if (userGuess == randomNumber) {
        result.innerHTML = `Well done! ${randomNumber} was correct!`;
        result.setAttribute('class', 'justRight');
        gameOver();
    } else if (numGuesses == 10) {
        result.innerHTML = '!!! Too many attempts, GAME OVER !!!';
        result.setAttribute('class', 'tooMany');
        gameOver();
    } else if (userGuess > randomNumber) {
        result.innerHTML = 'WRONG, that guess was too BIG';
        result.setAttribute('class', 'tooBig');
    } else {
        result.innerHTML = 'WRONG, that guess was too small';
        result.setAttribute('class', 'tooSmall');
    }
}