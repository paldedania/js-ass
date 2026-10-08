const rows = 5;
for (let row = 1; row <= rows; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    if (col > 1) line += " ";
    line += col === 1 || col === row || row === rows ? "*" : " ";
  }
  console.log(line);
}
