//9. Write a program that calculates the sum of odd elements of a given array.

var arr = [2, 4, 7, 8, 7, 1],
    res = 0;

function oddSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            res = res + arr[i];
        }
    }
    return res;
}

console.log(oddSum(arr));