// Find the greatest common divisor using the Euclidean algorithm.
let first = 48;
let second = 18;
do {
  const remainder = first % second;
  first = second;
  second = remainder;
} while (second !== 0);
console.log(first);
