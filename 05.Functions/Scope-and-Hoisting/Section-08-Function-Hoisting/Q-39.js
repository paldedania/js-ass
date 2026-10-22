// Q39. myFunc is already initialized with the declared function before the first statement executes.

console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());

// Expected output:
// function
// I am hoisted
