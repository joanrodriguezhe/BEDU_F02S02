//if/else

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

//switch
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

console.log(msg);

//Ternary
let speed = 90;

console.log((speed > 100) ? "You're going too fast!" : "Under the limit");

//For/While
for (let i = 0; i < 200; i++) {
    console.log('HelloWorld');
}

let i = 0;
while (i < 200) {
    console.log('HelloWorld');
    i++;
}

//Reto 2

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) console.log(i);
}

//Reto 3

for (let i = 1; i <= 100; i++) {
    let countDiv = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) countDiv++;
    }
    if (countDiv === 2) console.log(i);
}