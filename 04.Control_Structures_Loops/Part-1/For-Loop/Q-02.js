const number = 4729;
let sum = 0;
for (let remaining = Math.abs(number); remaining > 0; remaining = Math.floor(remaining / 10)) {
  sum += remaining % 10;
}
console.log(sum); // 22
