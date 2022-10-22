/* 8. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68 

The grades are computed as follows :

< 60% F
< 70% D
< 80% C
< 90% B
< 100% A
*/
var students = [
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68],
];

var sumMarks = 0;
var avgMarks = "";

for (i = 0; i < students.length; i++) {
    sumMarks += students[i][1];
    avgMarks = sumMarks / students.length;
}

console.log("Average grade: " + avgMarks);

if (avgMarks < 60) {
    console.log("Average grade is F");
} else if (avgMarks < 70) {
    console.log("Average grade is D");
} else if (avgMarks < 80) {
    console.log("Average grade is C");
} else if (avgMarks < 90) {
    console.log("Average grade is B");
} else if (avgMarks <= 100) {
    console.log("Average grade is A");
}