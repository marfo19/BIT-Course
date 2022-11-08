/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

let b,
    array = [-3, 11, 5, 3.4, -8];

function multiply(array, num) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            b = array[i] * num;
            array[i] = b;
        }
    }

    return console.log(array);
}

multiply(array, 2);