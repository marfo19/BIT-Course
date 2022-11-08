/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8] */

function arrayRemove(arr, value) {
    return arr.filter(function(ele) {
        return ele != value;
    });
}

var result = arrayRemove([4, 6, 2, 8, 2, 2], 2);
console.log(result);