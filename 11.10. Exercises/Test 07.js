/*7. Create 5 variables (or input fields) with canine species. Create one more variable with canine and
compare it with first 5 species. If it is match - write that on screen. Example: “This is German Shepherd
called Neo”. If there is no match - write on screen that this is a mixed breed.*/

let a = 'American Stafford';
let b = 'Ridgeback';
let c = 'Bulldog';
let d = 'Great Dane';
let e = 'Labrador Retriever';

let x = 'Labrador Retriever';

// if (x == a || x == b || x == c || x == d || x == e) {
//     console.log('This is ' + x + ' called Neo.');
// } else {
//     console.log('This is a mixed breed.');
// }

x == a || x == b || x == c || x == d || x == e ?
    console.log('This is ' + x + ' called Neo.') :
    console.log('This is a mixed breed.');