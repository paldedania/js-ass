// Add numbers until the sum exceeds 100 and print the last added number.
let sum = 0;
for (let number = 1; ; number++) {
  sum += number;
  if (sum > 100) {
    console.log("Last number added:", number);
    console.log("Sum:", sum);
    break;
  }
}
