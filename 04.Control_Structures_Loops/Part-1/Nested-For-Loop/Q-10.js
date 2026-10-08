// Each table uses multipliers 1 through 10 and occupies one line.
for (let number = 1; number <= 5; number++) {
  let line = "";
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    const product = number * multiplier;
    if (product % 2 !== 0) continue;
    line += (line === "" ? "" : ", ") + number + " x " + multiplier + " = " + product;
  }
  console.log(line);
}
