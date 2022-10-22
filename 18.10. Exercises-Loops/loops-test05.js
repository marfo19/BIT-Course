// 5.Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".

var y = 41;
var x = y.toString();
var sum = 0;

for (i = 0; i < x.length; i++) {
    sum += +x[i];
}

console.log(sum);