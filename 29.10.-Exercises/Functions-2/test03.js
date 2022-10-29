/* 3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 ->; "HaHaHa" */

function sumString(n) {
    let a = "abc";
    return a.repeat(n);
}

console.log(sumString(3));