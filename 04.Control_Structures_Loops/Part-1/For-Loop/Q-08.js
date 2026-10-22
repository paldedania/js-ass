// Print the first 20 Fibonacci numbers, starting with 0 and 1.
let first = 0;
let second = 1;
let series = "";
for (let i = 0; i < 20; i++) {
  series += (i === 0 ? "" : " ") + first;
  const next = first + second;
  first = second;
  second = next;
}
console.log(series);
