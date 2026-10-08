// Use a non-negative integer. Append remainders in right-to-left digit order.
const decimal = 13;
let reversedBinary = "";
for (let remaining = decimal; remaining > 0; remaining = Math.floor(remaining / 2)) {
  reversedBinary += remaining % 2;
}
console.log(reversedBinary === "" ? "0" : reversedBinary); // 1011
