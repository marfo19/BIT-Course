/* 1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false */

function checkString(x) {
    if (typeof x == "string") {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkString("1");