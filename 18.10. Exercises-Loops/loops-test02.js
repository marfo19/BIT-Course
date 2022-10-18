// 2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
// var sum = "";
var x = 2;

for (var i = 0; i <= 5; i++) {
    if (i === 2) {
        console.log(x + " up to square equals " + x ** i);
        continue;
    } else if (i === 3) {
        console.log(x + " up to cube equals " + x ** i);
        continue;
    }
    console.log("2 up to " + i + " equals " + x ** i);
}