// Find the leftmost digit of a positive integer.
let number = 58372;
do {
  if (number >= 10) number = Math.floor(number / 10);
} while (number >= 10);
console.log(number);
