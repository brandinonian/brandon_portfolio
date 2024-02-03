const correctAnswers = ['B', 'C', 'A', 'D', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const submitButton = document.querySelector('#submitButton');
const resetButton = document.querySelector('#resetButton');

// user submission event
submitButton.addEventListener('click', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // check answers & update score
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    
    // show score & reset view
    result.classList.remove('d-none');
    
    scrollTo(0, 0);
    
    // update score animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});
    
// reset the page
resetButton.addEventListener('click', e => {
    result.classList.add('d-none');
    scrollTo(0, 0);
});