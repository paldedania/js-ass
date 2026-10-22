// Print a 5 by 5 star square with a blank main diagonal.
for (let row = 0; row < 5; row++) {
  let line = "";
  for (let column = 0; column < 5; column++) {
    if (column > 0) line += " ";
    line += row === column ? " " : "*";
  }
  console.log(line);
}
