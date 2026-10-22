// Print multiples of 3 and 5 that are not multiples of 7.
let number = 1;
while (number <= 100) {
  if (number % 3 === 0 && number % 5 === 0 && number % 7 !== 0) console.log(number);
  number++;
}
