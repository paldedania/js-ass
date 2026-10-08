let sum = 0;
for (let number = 1; ; number++) {
  sum += number;
  if (sum > 100) {
    // Adding 14 crosses 100. Before that, 13 was last and the sum was 91.
    console.log("Last number added before crossing 100:", number - 1);
    break;
  }
}
