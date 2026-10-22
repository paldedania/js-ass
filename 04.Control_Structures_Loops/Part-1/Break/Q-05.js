// Stop before printing a perfect square greater than 20.
for (let number = 1; number <= 50; number++) {
  if (number > 20 && Number.isInteger(Math.sqrt(number))) break;
  console.log(number);
}
