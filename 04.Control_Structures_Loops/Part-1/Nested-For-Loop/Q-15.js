// Print eight centered rows of Pascal's triangle using nested for loops and no arrays.
const rows = 8;
for (let row = 0; row < rows; row++) {
  let line = "";
  for (let space = 0; space < (rows - row - 1) * 2; space++) line += " ";
  let coefficient = 1;
  for (let column = 0; column <= row; column++) {
    const text = String(coefficient);
    for (let space = text.length; space < 3; space++) line += " ";
    line += text;
    if (column < row) line += " ";
    coefficient = coefficient * (row - column) / (column + 1);
  }
  console.log(line);
}
