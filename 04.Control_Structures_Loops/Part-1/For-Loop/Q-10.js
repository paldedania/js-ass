// Convert a non-negative decimal integer to binary manually.
const number = 13;
let binary = "";
for (let remaining = number; remaining > 0; remaining = Math.floor(remaining / 2)) {
  binary = (remaining % 2) + binary;
}
console.log(binary === "" ? "0" : binary);
