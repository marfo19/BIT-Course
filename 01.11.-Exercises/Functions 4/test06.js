/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. */

let array = [2, 4, -2, 7, -2, 4, 2];

function symmetric(array) {
    let result = "";
    for (start = 0, end = array.length - 1; start < end; start++, end--) {
        if (array[start] !== array[end]) {
            result = "The array is not symmetric";
        } else {
            result = "The array is SYMMETRIC";
        }
    }
    return console.log(result);
}

symmetric(array);