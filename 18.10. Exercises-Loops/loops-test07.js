// 7. Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

var myArray = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
var index = "";

for (i = 0; i <= myArray.length; i++) {
    if (myArray[i] == "c") {
        console.log("Index of letter C is " + i);
    }
}