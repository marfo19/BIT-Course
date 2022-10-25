/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A. */

var y = "a",
    x = "JovanA",
    res = 0;

function count(x, y) {
    for (let i = 0; i < x.length; i++) {
        if (x.charAt(i) == y || x.charAt(i) == y.toUpperCase()) {
            res++;
        }
    }
    return res;
}

console.log(count(x, y));