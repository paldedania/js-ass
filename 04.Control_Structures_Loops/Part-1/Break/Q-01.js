// Print the index of the first 7 and stop.
const numbers = [2, 4, 7, 9, 7];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    console.log(i);
    break;
  }
}
