// Q57. var ignores if-block boundaries. A beginner may incorrectly expect the block scope provided by let or const.

if (true) {
    var x = 20;
}
console.log(x);

// Expected output:
// 20
