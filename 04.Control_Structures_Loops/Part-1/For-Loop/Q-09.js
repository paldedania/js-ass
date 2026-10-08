const scores = [45, 78, 90, 32, 56, 88];
let sum = 0;
for (let i = 0; i < scores.length; i++) sum += scores[i];
const average = sum / scores.length;
let aboveAverage = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > average) aboveAverage++;
}
console.log("Average:", average);
console.log("Students above average:", aboveAverage); // 3
