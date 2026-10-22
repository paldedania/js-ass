// Print a hollow reverse right-angle star pattern.
const rows = 5;
for (let row = rows; row >= 1; row--) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    if (column > 1) line += " ";
    line += row === rows || column === 1 || column === row ? "*" : " ";
  }
  console.log(line);
}
