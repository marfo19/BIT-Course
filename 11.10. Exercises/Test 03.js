/*3. Find the grade for input marks (you should have at least two input marks). Grades are:
A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.*/

let a = 90;
let b = 51;

if (a >= 51 && a <= 60) {
    console.log('Your grade is E!');
} else if (a >= 61 && a <= 70) {
    console.log('Your grade is D!');
} else if (a >= 71 && a <= 80) {
    console.log('Your grade is C!');
} else if (a >= 81 && a <= 90) {
    console.log('Your grade is B!');
} else if (a >= 91 && a <= 100) {
    console.log('Your grade is A!');
} else {
    console.log('You failed.');
}

if (b >= 51 && b <= 60) {
    console.log('Your grade is E!');
} else if (b >= 61 && b <= 70) {
    console.log('Your grade is D!');
} else if (b >= 71 && b <= 80) {
    console.log('Your grade is C!');
} else if (b >= 81 && b <= 90) {
    console.log('Your grade is B!');
} else if (b >= 91 && b <= 100) {
    console.log('Your grade is A!');
} else {
    console.log('You failed.');
}