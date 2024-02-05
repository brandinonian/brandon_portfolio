const textInput = document.querySelector('#textInput');
const userInput = document.querySelector('.userInput');
const movieInfo = document.querySelector('.movieInfo');

const movieTitle = document.querySelector('#movieTitle');
const movieYear = document.querySelector('#movieYear');
const moviePlot = document.querySelector('#moviePlot');
const movieActors = document.querySelector('#movieActors');

const APIKey = '682abde2';

async function getData() {
    const searchTerm = textInput.value;
    const response = await fetch('http://www.omdbapi.com/?apikey=' + APIKey + '&t=' + searchTerm);
    const data = await response.json();
    console.log(data);

    function updateUI(data) {
        // update movie title
        movieTitle.textContent = data.Title;
        // update movie year
        movieYear.textContent = data.Year;
        // update movie plot
        moviePlot.textContent = data.Plot;
        // update movie actors
        movieActors.textContent = data.Actors;
    }

    updateUI(data);
}

userInput.addEventListener('submit', e => {
    e.preventDefault();
    getData();
});