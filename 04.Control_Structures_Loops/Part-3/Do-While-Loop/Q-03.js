// Calculate the sum of the first n natural numbers.
const n = 5;
let number = 1;
let sum = 0;
do {
  if (number <= n) sum += number;
  number++;
} while (number <= n);
console.log(sum);
