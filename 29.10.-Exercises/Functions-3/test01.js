/* 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

function insert(string, ins, index = 0) {
    let result1 = "",
        result2 = "";

    for (i = 0; i < index; i++) {
        result1 += string[i];
    }

    for (j = index; j < string.length; j++) {
        result2 += string[j];
    }

    result1 = result1 + ins + result2;

    console.log(result1);
}

insert("My random string", "JS ", 0);