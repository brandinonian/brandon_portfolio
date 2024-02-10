const form = document.querySelector('.calculator');
const nameField = document.querySelector('#nameField');
const nameFeedback = document.querySelector('label[for="nameField"]');
const passField = document.querySelector('#passField');
const passFeedback = document.querySelector('label[for="passField"]');
const costField = document.querySelector('#costField');
const costFeedback = document.querySelector('label[for="costField"]');
const result = document.querySelector('#result');

const namePattern = /^[a-zA-Z ]{4,}$/;
const passPattern = /^[0-9a-zA-Z]{12}$/;
const costPattern = /^[0-9\.]{1,}$/;

let nameValid = false;
let passValid = false;
let costValid = false;

// currency format
let moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

// name live styling
nameField.addEventListener('keyup', e => {
    const nameValue = nameField.value;
    if(namePattern.test(nameValue)){
        nameField.setAttribute('class', 'pass');
    } else {
        nameField.setAttribute('class', 'fail');
    }
});

// password live styling
passField.addEventListener('keyup', e => {
    const passValue = passField.value;
    if(passPattern.test(passValue)){
        passField.setAttribute('class', 'pass');
    } else {
        passField.setAttribute('class', 'fail');
    }
});

// meal cost live styling
costField.addEventListener('keyup', e => {
    const costValue = costField.value;
    if(costPattern.test(costValue)){
        costField.setAttribute('class', 'pass');
    } else {
        costField.setAttribute('class', 'fail');
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    nameField.innerHTML = '';
    passField.innerHTML = '';
    costField.innerHTML = '';

    // set tip rate
    const quality = document.querySelector('input[name=quality]:checked').value;

    // check namename input
    const nameValue = nameField.value;
    if(namePattern.test(nameValue)){
        nameField.setAttribute('class', 'pass');
        nameFeedback.innerHTML = '';
        nameValid = true;
    } else {
        nameField.setAttribute('class', 'fail');
        nameFeedback.innerHTML = 'Name must be at least 4 letters, no numbers'
        nameValid = false;
    }

    // check password input
    const passValue = passField.value;
    if(passPattern.test(passValue)){
        passField.setAttribute('class', 'pass');
        passFeedback.innerHTML = '';
        passValid = true;
    } else {
        passField.setAttribute('class', 'fail');
        passFeedback.innerHTML = 'Password must be 12 characters, letters and numbers only'
        passValid = false;
    }

    // check cost input
    const mealCost = costField.value;
    let totalCost = 0;
    let tipValue = mealCost * (quality/100);
    if(costPattern.test(mealCost)){
        // check cost input is more than 0
        if(mealCost > 0){
            costField.setAttribute('class', 'pass');
            costFeedback.innerHTML = '';
            costValid = true;
            totalCost = parseFloat(mealCost) + parseFloat(tipValue);
            // format variables as currency
            let formattedMeal = moneyFormat.format(mealCost);
            let formattedTotal = moneyFormat.format(totalCost);
            let formattedTip = moneyFormat.format(tipValue);
            result.innerHTML = `Meal Cost: ${formattedMeal}<br />Tip: ${formattedTip}<br />Total: ${formattedTotal}`
        } else {
            costField.setAttribute('class', 'fail');
            costFeedback.innerHTML = 'Meal Cost must be more than 0'
            costValid = false;
        }
    } else {
        costField.setAttribute('class', 'fail');
        costFeedback.innerHTML = 'Meal Cost must be numbers and decimal only'
        costValid = false;
    }

    // hides results unless input fields are valid
    if (!nameValid || !passValid || !costValid){
        result.style.display = 'none';
    } else {
        result.style.display = 'block';
    }
});