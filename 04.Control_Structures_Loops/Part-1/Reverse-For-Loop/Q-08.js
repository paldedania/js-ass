// Print binary digits in reverse order, starting with the least significant bit.
const number = 13;
let reversedBinary = "";
for (let remaining = number; remaining > 0; remaining = Math.floor(remaining / 2)) {
  reversedBinary += remaining % 2;
}
console.log(reversedBinary === "" ? "0" : reversedBinary);
