// Count days hotter than 30 degrees Celsius.
const temperatures = [28, 32, 25, 40, 18, 35];
let count = 0;
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > 30) count++;
}
console.log(count); // 3
