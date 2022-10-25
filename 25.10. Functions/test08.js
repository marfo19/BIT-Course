/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
var res = 0;

function countOccurrences(a, e) {
    for (let i = 0; i < a.length; i++) {
        if (e == a[i]) {
            res++;
        }
    }
    return res;
}

console.log(countOccurrences(a, e));