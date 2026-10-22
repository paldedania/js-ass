// Fill and print a 6 by 6 clockwise spiral starting at the top-left.
const size = 6;
const matrix = [];
for (let row = 0; row < size; row++) matrix[row] = [];
let number = 1;
for (let layer = 0; layer < size / 2; layer++) {
  const end = size - 1 - layer;
  for (let column = layer; column <= end; column++) matrix[layer][column] = number++;
  for (let row = layer + 1; row <= end; row++) matrix[row][end] = number++;
  for (let column = end - 1; column >= layer; column--) matrix[end][column] = number++;
  for (let row = end - 1; row > layer; row--) matrix[row][layer] = number++;
}
for (let row = 0; row < size; row++) {
  let line = "";
  for (let column = 0; column < size; column++) {
    if (column > 0) line += " ";
    line += (matrix[row][column] < 10 ? " " : "") + matrix[row][column];
  }
  console.log(line);
}
