/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

function retirement(gender, birthyear) {
    const year = 2022;
    let age = year - birthyear;
    if (age >= 65 && gender == "male") {
        console.log("You are retired");
    } else if (age >= 60 && gender == "female") {
        console.log("You are retired");
    } else if (age < 60 && gender == "female" && 60 - age != 1) {
        console.log("You need " + (60 - age) + " more years to be retired");
    } else if (age < 65 && gender == "male" && 65 - age != 1) {
        console.log("You need " + (65 - age) + " more years to be retired");
    } else {
        console.log("You need one more year to be retired");
    }
}

retirement("female", 1960);