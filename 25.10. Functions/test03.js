//3. Write a program that checks if a given number is a three digit long number.
var result = "";

function threeDigits(a) {
    if (a > 99 && a < 1000) {
        return (result = "Number is three digits long.");
    } else {
        return (result = "Number is NOT three digits long.");
    }
}

console.log(threeDigits(323));