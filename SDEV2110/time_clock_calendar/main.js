const clock = document.querySelector('.clock');
const calendar = document.querySelector('.calendar');

const tick = () => {

    const now = new Date();

    // military time
    const militaryTime = {
        hours: dateFns.format(now, 'HH'),
        minutes: dateFns.format(now, 'mm'),
        seconds: dateFns.format(now, 'ss')
    };

    // standard time
    const standardTime = {
        hours: dateFns.format(now, 'hh'),
        minutes: dateFns.format(now, 'mm'),
        seconds: dateFns.format(now, 'ss'),
        ampm: dateFns.format(now, 'A')

    };

    clock.innerHTML = `Military Time:
     <span>${militaryTime.hours} : ${militaryTime.minutes} : ${militaryTime.seconds}</span>
     &nbsp
     &nbsp
     &nbsp
     Standard Time:
     <span>${standardTime.hours} : ${standardTime.minutes} : ${standardTime.seconds} ${standardTime.ampm}</span>
     `;

    // long date
    const longDate = {
        month: dateFns.format(now, 'MMMM'),
        day: dateFns.format(now, 'DD'),
        year: dateFns.format(now, 'YYYY')
    };

    // military date
    const militaryDate = {
        month: dateFns.format(now, 'MMM'),
        day: dateFns.format(now, 'DD'),
        year: dateFns.format(now, 'YYYY')  
    };

    // slash date
    const slashDate = {
        month: dateFns.format(now, 'M'),
        day: dateFns.format(now, 'D'),
        year: dateFns.format(now, 'YY')  
    };

    // euro date
    const euroDate = {
        month: dateFns.format(now, 'M'),
        day: dateFns.format(now, 'D'),
        year: dateFns.format(now, 'YYYY')  
    };

    calendar.innerHTML = `Long Date: 
    <span>${longDate.month} ${longDate.day}, ${longDate.year}</span>
    &nbsp
    &nbsp
    &nbsp
    Military Date:
    <span>${militaryDate.day} ${militaryDate.month} ${militaryDate.year}</span>
    <br />
    <br />
    <br />
    Slash Date:
    <span>${slashDate.day}/${slashDate.month}/${slashDate.year}</span>
    &nbsp
    &nbsp
    &nbsp
    Euro Date:
    <span>${euroDate.month}/${euroDate.day}/${euroDate.year}</span>
    `;

};

setInterval(tick, 1000);