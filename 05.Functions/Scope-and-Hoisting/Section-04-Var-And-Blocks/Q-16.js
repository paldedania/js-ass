// Q16. var ignores ordinary blocks, so result belongs to the enclosing scope.

if (10 > 5) {
    var result = "Success";
}
console.log(result);

// Expected output:
// Success
