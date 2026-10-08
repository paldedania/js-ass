let series = "";
for (let number = 1; number <= 128; number *= 2) {
  series += (series === "" ? "" : " ") + number;
}
console.log(series);
