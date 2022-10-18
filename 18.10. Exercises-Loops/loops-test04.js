/*4. Write a code to display the n terms of even natural number and their sum. Example:
Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10". */

var x = 5;
var sum = "";

for (i = 1; i <= x; i++) {
    sum = 2 * i;
    console.log("The even numbers are " + sum);
}