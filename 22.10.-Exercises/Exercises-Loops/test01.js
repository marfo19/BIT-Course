/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

for (var i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log("Number is " + i + ".");
    } else if (i % 2 === 0) {
        console.log("Number " + i + " is even.");
    } else {
        console.log("Number " + i + " is odd.");
    }
}