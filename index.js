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