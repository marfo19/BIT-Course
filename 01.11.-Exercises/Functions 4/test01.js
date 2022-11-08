/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes */

let e = -4.2,
    a = [5, -4.2, 3, 7];

function findElement(e, a) {
    let result = "";
    for (let i = 0; i < a.length; i++) {
        if (e == a[i]) {
            result = "yes";
            break;
        } else {
            result = "no";
        }
    }
    return console.log(result);
}