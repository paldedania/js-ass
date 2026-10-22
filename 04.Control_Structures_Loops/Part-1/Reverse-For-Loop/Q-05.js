// Print the first 15 Fibonacci numbers in reverse order, ending at 0.
const fibonacci = [0, 1];
for (let i = 2; i < 15; i++) fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
let series = "";
for (let i = fibonacci.length - 1; i >= 0; i--) {
  series += (series === "" ? "" : " ") + fibonacci[i];
}
console.log(series);
