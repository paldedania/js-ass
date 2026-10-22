// Print 50 down to 1, divisible by 3 but not by 9.
for (let number = 50; number >= 1; number--) {
  if (number % 3 === 0 && number % 9 !== 0) console.log(number);
}
