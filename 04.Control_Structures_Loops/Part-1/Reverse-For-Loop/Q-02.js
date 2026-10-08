const numbers = [12, 45, 7, 23, 56, 89, 34];
let largest = null;
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] < 50 && (largest === null || numbers[i] > largest)) largest = numbers[i];
}
console.log(largest === null ? "No number below 50" : largest); // 45
