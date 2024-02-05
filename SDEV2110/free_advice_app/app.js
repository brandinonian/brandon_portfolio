const newAdviceButton = document.querySelector('#newAdviceButton');
const results = document.querySelector('.results');

newAdviceButton.addEventListener('click', () => {
    getData();
});

async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    results.textContent = data.slip.advice; // update results UI
}