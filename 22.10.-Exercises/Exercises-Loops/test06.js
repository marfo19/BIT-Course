/* 6. Write a program that prints the elements of the following array.
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27]
  ]; */

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
];

for (i in a) {
    for (j in a[i]) {
        console.log(a[i][j]);
    }
}