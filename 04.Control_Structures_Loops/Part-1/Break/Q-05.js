for (let number = 1; number <= 50; number++) {
  if (number > 20 && Number.isInteger(Math.sqrt(number))) break;
  console.log(number); // Prints 1 through 24; stops at 25.
}
