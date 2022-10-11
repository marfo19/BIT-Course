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