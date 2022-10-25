/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var a = [4, 2, 2, -1, 6];
var min = a[0];

for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
    }
}

var min2 = a[0];

for (x = 0; x < a.length; x++) {
    if (a[x] < min2 && a[x] !== min) {
        min2 = a[x];
    }
}

console.log(min2);