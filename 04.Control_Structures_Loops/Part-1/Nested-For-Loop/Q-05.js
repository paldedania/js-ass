for (let row = 5; row >= 1; row--) {
  let line = "";
  for (let col = 1; col <= row; col++) line += (col === 1 ? "" : " ") + row;
  console.log(line);
}
