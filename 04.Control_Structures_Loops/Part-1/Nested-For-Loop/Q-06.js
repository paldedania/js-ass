// Print descending rows containing numbers from 1 to the row length.
for (let row = 5; row >= 1; row--) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    line += (column === 1 ? "" : " ") + column;
  }
  console.log(line);
}
