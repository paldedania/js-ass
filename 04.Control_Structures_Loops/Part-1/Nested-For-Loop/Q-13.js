// Print the exact diamond number pattern for n = 5.
const n = 5;
for (let row = 1; row <= 2 * n - 1; row++) {
  const height = row <= n ? row : 2 * n - row;
  let line = "";
  for (let space = 0; space < n - height; space++) line += " ";
  for (let number = 1; number <= height; number++) line += number;
  for (let number = height - 1; number >= 1; number--) line += number;
  console.log(line);
}
