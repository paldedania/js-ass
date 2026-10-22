// Check whether a number equals the sum of its proper divisors.
const number = 28;
let sum = 0;
for (let divisor = 1; divisor <= number / 2; divisor++) {
  if (number % divisor === 0) sum += divisor;
}
console.log(number > 0 && sum === number ? "Perfect number" : "Not a perfect number");
