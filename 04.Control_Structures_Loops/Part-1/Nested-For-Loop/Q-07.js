// Print consecutive numbers from 15 down to 1 in descending row lengths.
const rows = 5;
let number = rows * (rows + 1) / 2;
for (let row = rows; row >= 1; row--) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    if (column > 1) line += " ";
    line += (number < 10 ? " " : "") + number--;
  }
  console.log(line);
}
