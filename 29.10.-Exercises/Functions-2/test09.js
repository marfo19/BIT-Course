/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string", "-" -> "My-random-string" */

function myFunction(string, x) {
    string = string.replaceAll(" ", x);
    return string;
}

console.log(myFunction("My random string", "-"));