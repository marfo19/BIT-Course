/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var a = [4, 2, 2, -1, 6];
var value;

for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        if (a[j] < a[i]) {
            value = a[i];
            a[i] = a[j];
            a[j] = value;
        }
    }
}
console.log(value);
var a = [4, 2, 2, -1, 6];
var temp;
for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[j] < a[i]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
        console.log(a[i + 1]);
        break;
    }
}