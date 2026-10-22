// Print border 1s and inner 0s, overriding cells with 2 when row + column is divisible by 3.
const rows = 5;
const cols = 6;
// Indices start at zero.
for (let row = 0; row < rows; row++) {
  let line = "";
  for (let column = 0; column < cols; column++) {
    let value = row === 0 || row === rows - 1 || column === 0 || column === cols - 1 ? 1 : 0;
    if ((row + column) % 3 === 0) value = 2;
    line += (column === 0 ? "" : " ") + value;
  }
  console.log(line);
}
