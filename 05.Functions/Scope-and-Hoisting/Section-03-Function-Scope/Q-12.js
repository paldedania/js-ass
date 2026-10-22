// Q12. salary is local to employee. Access outside employee raises ReferenceError.

function employee() {
    var salary = 30000;
}
employee();
console.log(salary);

// Expected output:
// ReferenceError: salary is not defined
