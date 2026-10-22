// Multiply odd digits, reading the number from right to left.
const number = 4729;
let product = 1;
let hasOddDigit = false;
for (let remaining = Math.abs(number); remaining > 0; remaining = Math.floor(remaining / 10)) {
  const digit = remaining % 10;
  if (digit % 2 !== 0) {
    product *= digit;
    hasOddDigit = true;
  }
}
console.log(hasOddDigit ? product : "No odd digits");
