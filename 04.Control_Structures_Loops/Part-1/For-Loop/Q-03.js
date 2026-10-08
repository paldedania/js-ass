for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0 && number % 7 !== 0) {
    console.log(number);
  }
}
