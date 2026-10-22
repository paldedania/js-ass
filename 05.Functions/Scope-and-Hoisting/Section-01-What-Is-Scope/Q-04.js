// Q4. number belongs to first. second cannot access the local variables of a sibling function.

function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();

// Expected output:
// ReferenceError: number is not defined
