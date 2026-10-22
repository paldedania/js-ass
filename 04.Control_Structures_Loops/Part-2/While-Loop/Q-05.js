// Reverse the digits of a positive integer.
const number = 12345;
let remaining = number;
let reversed = 0;
while (remaining > 0) {
  reversed = reversed * 10 + remaining % 10;
  remaining = Math.floor(remaining / 10);
}
console.log(reversed);
