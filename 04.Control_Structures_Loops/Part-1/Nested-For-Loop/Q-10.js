// Print only even products in tables 1 through 5, with one table per line.
for (let number = 1; number <= 5; number++) {
  let line = "";
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    const product = number * multiplier;
    if (product % 2 === 0) {
      line += (line === "" ? "" : ", ") + `${number} x ${multiplier} = ${product}`;
    }
  }
  console.log(line);
}
