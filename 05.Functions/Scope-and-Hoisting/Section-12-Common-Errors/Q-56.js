// Q56. In a non-strict script, assigning undeclared x creates a globalThis property. In strict mode it raises ReferenceError. Declare var x inside test to keep it local.

function test() {
    x = 100; // missing var
}
test();
console.log(x);

// Expected output:
// 100
