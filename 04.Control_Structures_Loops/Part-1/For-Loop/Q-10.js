// Use a non-negative integer.
const decimal = 13;
let binary = "";
for (let remaining = decimal; remaining > 0; remaining = Math.floor(remaining / 2)) {
  binary = (remaining % 2) + binary;
}
console.log(binary === "" ? "0" : binary); // 1101
