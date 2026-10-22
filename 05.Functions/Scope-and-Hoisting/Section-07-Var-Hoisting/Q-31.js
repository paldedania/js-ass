// Q31. var score is initialized to undefined before execution; its assignment to 90 happens later.

console.log(score);
var score = 90;
console.log(score);

// Expected output:
// undefined
// 90
