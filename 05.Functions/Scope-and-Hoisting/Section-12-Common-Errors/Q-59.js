// Q59. var allows redeclaration in the same scope. Both declarations use one binding; assigning 20 replaces 10 and can hide mistakes.

var x = 10;
var x = 20;
console.log(x);

// Expected output:
// 20
