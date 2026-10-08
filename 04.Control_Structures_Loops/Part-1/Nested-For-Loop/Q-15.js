// Pascal's Triangle, the first question labeled 16 in the assignment.
const rows = 8;
for (let row = 0; row < rows; row++) {
  let line = "";
  for (let space = 0; space < (rows - row - 1) * 2; space++) line += " ";
  let value = 1;
  for (let col = 0; col <= row; col++) {
    if (col > 0) line += " ";
    // Center each coefficient in a three-character cell, without arrays.
    line += value < 10 ? " " + value + " " : value + " ";
    value = value * (row - col) / (col + 1);
  }
  console.log(line);
}
