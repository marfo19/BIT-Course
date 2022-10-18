/* 3. Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.*/

//while loop
var x = 5;
var total = x;

while (x > 1) {
    x--;
    total *= x;
}
console.log(total);

//for loop
var num = 5;

for (var i = num - 1; i >= 1; i--) {
    num *= i;
}

console.log(num);