// Print an alphabet right triangle with five rows.
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let column = 0; column < row; column++) {
    line += (column === 0 ? "" : " ") + alphabet[column];
  }
  console.log(line);
}
