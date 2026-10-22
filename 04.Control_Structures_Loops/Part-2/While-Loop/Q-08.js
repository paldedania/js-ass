// Calculate the factorial of a non-negative integer.
const number = 5;
let factor = 1;
let factorial = 1;
while (factor <= number) {
  factorial *= factor;
  factor++;
}
console.log(factorial);
