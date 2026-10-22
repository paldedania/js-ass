// Sum only positive numbers using continue.
const numbers = [10, -5, 20, -3, 0, 15];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) continue;
  sum += numbers[i];
}
console.log(sum);
