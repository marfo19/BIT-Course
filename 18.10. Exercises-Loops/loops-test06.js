/* 6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word". */

var word = "Marko";
var count = 0;

for (var i = 0; i < word.length; i++) {
    count++;
}

console.log("There is " + count + " letters in this word");