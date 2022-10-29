/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

function lastOccurence(x) {
    let b = "My random string";
    return b.lastIndexOf(x);
}

console.log(lastOccurence("r"));