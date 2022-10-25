//7. Write a program that calculates a number of digits of a given number.

function numDigits(a) {
    let result = a.toString().length;
    return result;
}

console.log(numDigits(10));