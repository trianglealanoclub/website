// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const now = new Date();
    let currentDay = weekday[now.getDay()];
    let currentMonth = month[now.getMonth()];
    let currentDate = now.getDate();
    let currentYear = now.getFullYear();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = "Today is " + currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);