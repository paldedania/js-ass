const numbers = [12, -5, 8, -3, 0, 7];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) continue;
  sum += numbers[i];
}
console.log(sum); // 27
