let enteredPin = 1234;
let correctPin = 1234;
let balance = 5000;
let withdrawal = 1500;
if (enteredPin === correctPin) {
  if (balance >= withdrawal) {
    console.log("Withdrawal successful");
  } else {
    console.log("Insufficient balance");
  }
} else {
  console.log("Incorrect PIN");
}
// Output: Withdrawal successful
