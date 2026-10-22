// Check a palindrome without converting the number to a string.
const number = 1221;
let remaining = number;
let reversed = 0;
do {
  reversed = reversed * 10 + remaining % 10;
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);
console.log(number >= 0 && number === reversed ? "Palindrome number" : "Not a palindrome number");
