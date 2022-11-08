/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function merge(...arrays) {
    let newArray2 = [];
    for (i = 0; i < arrays.length; i++) {
        newArray2.push(...arrays[i]);
    }
    return newArray2;
}
console.log(merge([4, 5, 6, 2], [3, 8, 11, 9]));