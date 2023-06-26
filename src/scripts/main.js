const dateEvent = new Date("Jul 8, 2023 00:00:00");
const timeStampEvent = dateEvent.getTime();

const contHours = setInterval(function() {
    const today = new Date ();
    const timeStampToday = today.getTime();

    const toEvent = timeStampEvent - timeStampToday;

    const dayToMs = 1000 * 60 * 60 * 24;
    const hourToMs = 1000 * 60 * 60;
    const minToMs = 1000 * 60;


    const daysToEvent = Math.floor(toEvent / dayToMs);
    const hoursToEvent = Math.floor((toEvent % dayToMs) / hourToMs);
    const minToEvent = Math.floor((toEvent % hourToMs) / minToMs);
    const secondsToEvent = Math.floor((toEvent % minToMs) / 1000);


    document.getElementById('daysToEvent').innerHTML = `${daysToEvent}`;
    document.getElementById('hoursToEvent').innerHTML = `${hoursToEvent}`;
    document.getElementById('minToEvent').innerHTML = `${minToEvent}`;
    document.getElementById('secondsToEvent').innerHTML = `${secondsToEvent}`;

    if (toEvent < 0) {
        clearInterval(contHours);
        document.getElementById('daysToEvent').innerHTML = '0';
        document.getElementById('hoursToEvent').innerHTML = '0';
        document.getElementById('minToEvent').innerHTML = '0';
        document.getElementById('secondsToEvent').innerHTML = '0';
    }

}, 1000);