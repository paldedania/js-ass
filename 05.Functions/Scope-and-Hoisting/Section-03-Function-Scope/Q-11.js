// Q11. first is local to calculateTotal. The last statement raises ReferenceError.

function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);

// Expected output:
// 300
// ReferenceError: first is not defined
