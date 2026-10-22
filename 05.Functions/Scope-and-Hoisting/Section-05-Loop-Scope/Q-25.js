// Q25. let step belongs to the loop scope. Access outside the loop raises ReferenceError.

for (let step = 1; step <= 4; step++) {
  console.log(step);
}
console.log(step);

// Expected output:
// 1
// 2
// 3
// 4
// ReferenceError: step is not defined
