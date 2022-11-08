/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

var sArray = [2, -2, 33, 12, 5, 8];
var input3 = 78;
var position = 3;
var nArray = [];

if (position > sArray.length) {
    someArr15 = "Error";
} else {
    for (var ii = 0; ii < sArray.length; ii++) {
        if (ii !== position) {
            sArray[ii] = nArray[ii];
        } else {
            sArray[ii] = input3;
            break;
        }
    }

    for (var jj = position + 1; jj <= sArray.length; jj++) {
        console.log(jj);
        nArray[jj] = sArray[jj - 1];
    }
}

console.log(nArray);