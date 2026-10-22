// Print four rows of consecutive numbers in a right triangle.
let number = 1;
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    line += (column === 1 ? "" : " ") + number++;
  }
  console.log(line);
}
