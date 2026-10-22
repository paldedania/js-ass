// Print a reverse right-angle star pattern.
for (let row = 5; row >= 1; row--) {
  let line = "";
  for (let column = 1; column <= row; column++) line += "*";
  console.log(line);
}
