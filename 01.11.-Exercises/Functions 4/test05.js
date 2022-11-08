/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

let array = [3, 11, -5, -3, 2];

function sumPositive(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result += array[i];
        }
    }
    return console.log(result);
}

sumPositive(array);