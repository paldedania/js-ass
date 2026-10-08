const rows = 5;
for (let row = rows; row >= 1; row--) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    if (col > 1) line += " ";
    line += row === rows || col === 1 || col === row ? "*" : " ";
  }
  console.log(line);
}
