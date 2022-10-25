/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

var h = [2, 4, 2, 0, -2, 4, 2];
isSymet = "";

for (var start = 0, end = h.length - 1; start < end; start++, end--) {
    if (h[start] !== h[end]) {
        isSymet = "The array isn't symmetric";
    } else {
        isSymet = "The array is symmetric";
    }
}

console.log(isSymet);