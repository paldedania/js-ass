// Q33. The first two reads produce undefined. Both declarations are initialized before the assignments execute.

console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);

// Expected output:
// undefined
// undefined
// 100
// 200
