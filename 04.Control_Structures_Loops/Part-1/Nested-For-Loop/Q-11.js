// Print absolute differences of zero-based row and column indices.
const n = 5;
for (let row = 0; row < n; row++) {
  let line = "";
  for (let column = 0; column < n; column++) {
    line += (column === 0 ? "" : " ") + Math.abs(row - column);
  }
  console.log(line);
}
