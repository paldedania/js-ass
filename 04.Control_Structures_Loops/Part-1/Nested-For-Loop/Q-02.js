for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 0; col < row; col++) {
    line += (col === 0 ? "" : " ") + String.fromCharCode(65 + col);
  }
  console.log(line);
}
