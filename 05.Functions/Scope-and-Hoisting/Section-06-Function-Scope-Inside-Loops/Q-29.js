// Q29. The outside console.log raises ReferenceError before calculate is called. Calling calculate first would still not expose its local i.

function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();

// Expected output:
// ReferenceError: i is not defined
