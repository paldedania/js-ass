// Find the sum of the digits using while.
const number = 4729;
let remaining = Math.abs(number);
let sum = 0;
while (remaining > 0) {
  sum += remaining % 10;
  remaining = Math.floor(remaining / 10);
}
console.log(sum);
