const number = 28;
let divisorSum = 0;
for (let divisor = 1; divisor <= number / 2; divisor++) {
  if (number % divisor === 0) divisorSum += divisor;
}
console.log(number > 1 && divisorSum === number ? "Perfect number" : "Not a perfect number");
