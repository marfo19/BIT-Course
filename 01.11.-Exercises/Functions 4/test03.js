/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var a = [4, 2, 2, -1, 6],
    min = a[0],
    index = 0;

function minimum(a) {
    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            index = i;
        }
    }

    return console.log(min + ", " + index);
}

minimum(a);

// pre-definded funcitons

function minimum(a) {
    let min = Math.min(...a);
    let index = a.indexOf(min);
    return console.log(min + ", " + index);
}

minimum(a);