/*1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.. Example: sides
of triangle are 3, 4, 5. This is scalene triangle.*/

let x = 1;
let y = 3;
let z = 3;

let result = '';

if (x == y && y == z) {
    result = 'Equilateral Triangle';
} else if (x == y || y == z || z == x) {
    result = 'Isosceles Triangle';
} else {
    result = 'Scalene Triangle';
}

console.log(result);
