//4. Write a program to compute the sum and product of an array of integers.

var a = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;

for (i = 0; i < a.length; i++) {
    sum += a[i];
    product *= a[i];
}
console.log(sum);
console.log(product);