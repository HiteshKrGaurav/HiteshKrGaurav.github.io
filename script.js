// Select the elements for the hours, minutes, seconds, and AM/PM
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const ampmElement = document.querySelector('#ampm');

function setTime() {
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Select the elements for
    // Convert the hours to 12-hour format
    if (hours > 12) {
        hours -= 12;
        ampm = 'अपराह्न';
    } else if (hours === 0) {
        hours = 12;
        ampm = 'पूर्वाह्न';
    } else if (hours === 12) {
        ampm = 'अपराह्न';
    } else {
        ampm = 'पूर्वाह्न';
    }

    // Update the clock display
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    ampmElement.textContent = ampm;
}



function formatTime(time) {
    // Add a leading zero if the time is less than 10
    return time < 10 ? `0${time}` : time;
}

// Set the initial time
setTime();

// Update the time every second
setInterval(setTime, 1000);




document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    document.getElementById("date").innerHTML = today.toLocaleDateString('hi-IN', {

        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric'
    });


});
