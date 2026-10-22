// Print each descending row number repeated that many times.
for (let row = 5; row >= 1; row--) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    line += (column === 1 ? "" : " ") + row;
  }
  console.log(line);
}
