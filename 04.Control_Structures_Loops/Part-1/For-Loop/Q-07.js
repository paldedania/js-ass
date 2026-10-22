// Print the series 1 2 4 8 16 32 64 128 using one loop.
let series = "";
for (let number = 1; number <= 128; number *= 2) {
  series += (series === "" ? "" : " ") + number;
}
console.log(series);
