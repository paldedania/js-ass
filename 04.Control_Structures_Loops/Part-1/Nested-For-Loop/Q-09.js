for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= 5; col++) {
    if (col > 1) line += " ";
    if (row === col) {
      line += " ";
      continue;
    }
    line += "*";
  }
  console.log(line);
}
