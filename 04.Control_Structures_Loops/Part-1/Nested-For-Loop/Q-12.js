for (let i = 1; i <= 10; i++) {
  for (let j = i + 1; j <= 10; j++) {
    if (Number.isInteger(Math.sqrt(i + j))) console.log("(" + i + ", " + j + ")");
  }
}
