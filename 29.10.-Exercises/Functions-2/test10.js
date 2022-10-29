// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

// function add(string, n) {
//     var ad = "";
//     if (n <= string.length) {
//         for (var i = 0; i <= n; i++) {
//             ad += string[i];
//         }
//         ad += "...";
//         return ad;
//     }
// }
// console.log(add("My random string", 4));

var string = "My random string";
var n = 5;

function newString(string, num) {
    var result = "";
    var add = "...";
    for (var i = 0; i < num; i++) {
        result += string[i];
    }
    result += add;
    return result;
}
var func = newString(string, n);
console.log(func);