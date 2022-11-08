/* 4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

let array = [4, 2, 2, -1, 0, 6];

function secondSmallest(array) {
    array.sort();
    return console.log(array[1]);
}

secondSmallest(array);