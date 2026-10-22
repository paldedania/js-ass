// Count the digits of an integer.
const number = 58372;
let remaining = Math.abs(number);
let count = remaining === 0 ? 1 : 0;
while (remaining > 0) {
  count++;
  remaining = Math.floor(remaining / 10);
}
console.log(count);
