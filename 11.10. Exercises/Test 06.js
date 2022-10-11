/*6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
age. Show how much is that older/younger than you with text for example “He/She is 13 years
older/younger than me”. If you are the same age - print that you are the same age.*/

let a = 32;
let myAge = 33;

const young = myAge - a;
const old = a - myAge;

if (a > myAge && old === 1) {
    console.log('You are ' + old + ' year older than me.');
} else if (a > myAge) {
    console.log('You are ' + old + ' years older than me.');
} else if (a < myAge && myAge - a === 1) {
    console.log('You are ' + young + ' year younger than me.');
} else if (a < myAge) {
    console.log('You are ' + young + ' years younger than me.');
} else {
    console.log('We are the same age!');
}