// Convert a non-negative decimal integer to binary, including zero.
const number = 13;
let remaining = number;
let binary = "";
do {
  binary = (remaining % 2) + binary;
  remaining = Math.floor(remaining / 2);
} while (remaining > 0);
console.log(binary);
