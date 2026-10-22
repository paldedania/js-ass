// Calculate a power without Math.pow or the exponentiation operator.
const base = 3;
const exponent = 4;
let result = 1;
let count = 0;
do {
  if (count < exponent) result *= base;
  count++;
} while (count < exponent);
console.log(result);
