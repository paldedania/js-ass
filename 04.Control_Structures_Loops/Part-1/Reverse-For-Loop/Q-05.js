// The first 15 terms are F0 through F14, ending at 377.
let first = 0;
let second = 1;
for (let i = 0; i < 14; i++) {
  const next = first + second;
  first = second;
  second = next;
}
let series = "";
for (let i = 14; i >= 0; i--) {
  series += (i === 14 ? "" : " ") + first;
  const previous = second - first;
  second = first;
  first = previous;
}
console.log(series);
