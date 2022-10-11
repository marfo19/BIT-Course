/* 5. Write a program to show you age based on entered number (if you know how to create input field, if
not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
example with 13. */

let a = 13;

if (a >= 18) {
    console.log('You are old enough to drive.');
} else {
    console.log('You need ' + (18 - a) + ' more years to be eligible to drive!');
}