// Calculate the product of all digits.
const number = 234;
let remaining = number;
let product = 1;
do {
  product *= remaining % 10;
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);
console.log(product);
