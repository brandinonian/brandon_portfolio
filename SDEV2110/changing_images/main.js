// Note: 
// First load is slow on the current server.
// For the sake of demonstrating my school
// curriculum I'm leaving it as is.

const lightbulb = document.querySelector('#lightbulb');
const pumpkins = document.querySelector('#pumpkins');

lightbulb.addEventListener('mouseover', e => {
    lightbulb.src = 'light_bulb_on.png';
});

lightbulb.addEventListener('mouseout', e => {
    lightbulb.src = 'light_bulb_off.png';
});

pumpkins.addEventListener('click', e => {
    const imgsrc = pumpkins.getAttribute('src');

    if(imgsrc == 'pumpkins.jpg'){
        pumpkins.src = 'pumpkins-lit.jpg';
    } else {
        pumpkins.src = 'pumpkins.jpg';
    }
});