const number = 12321;
let remaining = number;
let isPalindrome = number >= 0;
let highestPlace = 1;
for (let value = number; value >= 10; value = Math.floor(value / 10)) highestPlace *= 10;
// Compare and remove the outer digits, then decrease the place by two digits.
for (let place = highestPlace; place >= 10; place = Math.floor(place / 100)) {
  const leftDigit = Math.floor(remaining / place);
  const rightDigit = remaining % 10;
  if (leftDigit !== rightDigit) {
    isPalindrome = false;
    break;
  }
  remaining = Math.floor((remaining % place) / 10);
}
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");
