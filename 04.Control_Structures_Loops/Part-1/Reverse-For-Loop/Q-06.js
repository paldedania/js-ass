// Compare digits from both ends without converting the number to a string.
const number = 12321;
let divisor = 1;
for (; divisor <= number / 10; divisor *= 10) {}
let remaining = number;
let palindrome = number >= 0;
for (; divisor >= 10; divisor /= 100) {
  const firstDigit = Math.floor(remaining / divisor);
  const lastDigit = remaining % 10;
  if (firstDigit !== lastDigit) {
    palindrome = false;
    break;
  }
  remaining = Math.floor((remaining % divisor) / 10);
}
console.log(palindrome ? "Palindrome number" : "Not a palindrome number");
