// Print 40 down to 1, skipping perfect squares.
for (let number = 40; number >= 1; number--) {
  if (Number.isInteger(Math.sqrt(number))) continue;
  console.log(number);
}
