const n = 5;
for (let row = 0; row < n; row++) {
  let line = "";
  for (let col = 0; col < n; col++) {
    const difference = row >= col ? row - col : col - row;
    line += (col === 0 ? "" : " ") + difference;
  }
  console.log(line);
}
