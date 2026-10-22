// Print a hollow right-triangle star pattern.
const rows = 5;
for (let row = 1; row <= rows; row++) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    if (column > 1) line += " ";
    line += column === 1 || column === row || row === rows ? "*" : " ";
  }
  console.log(line);
}
