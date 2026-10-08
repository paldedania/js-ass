const size = 6;
const matrix = [];
for (let row = 0; row < size; row++) matrix[row] = [];
let number = 1;
// Fill each concentric layer clockwise, without repeating corner cells.
for (let layer = 0; layer < size / 2; layer++) {
  const end = size - 1 - layer;
  for (let col = layer; col <= end; col++) matrix[layer][col] = number++;
  for (let row = layer + 1; row <= end; row++) matrix[row][end] = number++;
  for (let col = end - 1; col >= layer; col--) matrix[end][col] = number++;
  for (let row = end - 1; row > layer; row--) matrix[row][layer] = number++;
}
for (let row = 0; row < size; row++) {
  let line = "";
  for (let col = 0; col < size; col++) {
    const value = matrix[row][col];
    line += (col === 0 ? "" : " ") + (value < 10 ? " " : "") + value;
  }
  console.log(line);
}
