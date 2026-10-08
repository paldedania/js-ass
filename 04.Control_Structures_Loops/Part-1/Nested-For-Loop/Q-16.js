const rows = 5;
const cols = 6;
// Use zero-based indices. The divisibility rule overrides the border rule.
for (let row = 0; row < rows; row++) {
  let line = "";
  for (let col = 0; col < cols; col++) {
    let value = row === 0 || row === rows - 1 || col === 0 || col === cols - 1 ? 1 : 0;
    if ((row + col) % 3 === 0) value = 2;
    line += (col === 0 ? "" : " ") + value;
  }
  console.log(line);
}
