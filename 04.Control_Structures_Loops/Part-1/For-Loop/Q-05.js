// Find the second-largest distinct value. Repeated maximums do not count.
const numbers = [12, 45, 7, 45, 23, 56, 89, 34];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] < largest && numbers[i] > secondLargest) {
    secondLargest = numbers[i];
  }
}
console.log(secondLargest === -Infinity ? "No second-largest distinct number" : secondLargest); // 56
