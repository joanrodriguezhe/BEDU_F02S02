let time = 34;
let greeting;
if (time < 0 || time >= 24 || typeof time == "number") {
    greeting = 'Invalid time';
} else if (time < 12) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good afternoon';
} else if (time >= 20) {
    greeting = 'Good evening';
}

console.log(greeting);

let day = 5;
let msg;

switch (day) {
    case 0:
        msg = 'Sunday';
        break;
    case 1:
        msg = 'Monday';
        break;
    case 2:
        msg = "Tuesday";
        break;
    case 3:
        msg = "Wednesday";
        break;
    case 4:
        msg = "Thursday";
        break;
    case 5:
        msg = "Friday";
        break;
    case 6:
        msg = "Saturday";
        break;
    default:
        msg = "Error";
}

console.log(msg)