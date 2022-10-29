/* 2. Write a function to check whether a string is blank or not. 

"My random string" -> false
" " -> true
12 -> false
false -> false

*/

function stringBlank(x) {
    if (x === " ") {
        console.log(true);
    } else console.log(false);
}

stringBlank(" ");