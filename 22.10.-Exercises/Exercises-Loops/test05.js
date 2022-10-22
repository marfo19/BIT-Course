/* 5. Write a program which prints the elements of the following array as a single string.
var x = ["1", "A", "B", "c", "r", true, Nan, undefined]; */

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];

var myString = "";

for (i = 0; i < x.length; i++) {
    myString += x[i];
}

console.log(myString);