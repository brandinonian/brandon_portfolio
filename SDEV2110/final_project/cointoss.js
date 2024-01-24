const playerBtns = document.querySelector('.playerButtons');
const coinTossImg = document.querySelector('#coinTossImg');
const displayChoice = document.querySelector('#displayChoice');
const displayResult = document.querySelector('#displayResult');
const playerMessage = document.querySelector('#playerMessage');
const displayScore = document.querySelector('#displayScore');

let wins = 0;
let losses = 0;
let playerScore = [wins, losses];

const guessOptions = ['guessHeads', 'guessTails'];
const coinSides = ['heads', 'tails'];
const imageSrc = ['CoinTossImages/heads.jpg', 'CoinTossImages/tails.jpg'];

playerBtns.addEventListener('click', e => {
    const playerChoice = guessOptions.indexOf(e.target.id);
    let i = Math.floor(Math.random() * 2);

    // calculate win/loss, update score, update UI
    if (playerChoice == i) {
        playerScore[0]++;
        playerMessage.innerHTML = 'You chose wisely!';
    } else {
        playerScore[1]++;
        playerMessage.innerHTML = 'Sorry, wrong choice.';
    }

    // update UI
    coinTossImg.setAttribute('src', imageSrc[i]);
    displayChoice.innerHTML = `You chose ${coinSides[playerChoice]}`;
    displayResult.innerHTML = `The toss is ${coinSides[i]}`;
    displayScore.innerHTML = `Wins = ${playerScore[0]} \t Losses = ${playerScore[1]}`;
});