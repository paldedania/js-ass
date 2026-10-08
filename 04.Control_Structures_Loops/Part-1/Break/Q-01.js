const numbers = [3, 5, 7, 2, 7, 9];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    console.log("Index:", i); // 2
    break;
  }
}
