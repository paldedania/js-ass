// Print multiples of 4 that are not multiples of 8 between 1 and 100.
let number = 1;
do {
  if (number % 4 === 0 && number % 8 !== 0) console.log(number);
  number++;
} while (number <= 100);
