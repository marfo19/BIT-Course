/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function countLetter(x, n) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] == n) {
            result += x[i];
        }
    }
    return result.length;
}

console.log(countLetter("My random string", "n"));