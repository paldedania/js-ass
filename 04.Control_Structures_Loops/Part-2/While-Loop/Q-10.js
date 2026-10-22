// Convert a decimal integer to binary using while.
const number = 13;
let remaining = number;
let binary = "";
while (remaining > 0) {
  binary = (remaining % 2) + binary;
  remaining = Math.floor(remaining / 2);
}
console.log(binary === "" ? "0" : binary);
