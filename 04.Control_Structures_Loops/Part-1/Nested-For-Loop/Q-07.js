let number = 15;
for (let row = 5; row >= 1; row--) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    if (col > 1) line += " ";
    line += (number < 10 ? " " : "") + number;
    number--;
  }
  console.log(line);
}
