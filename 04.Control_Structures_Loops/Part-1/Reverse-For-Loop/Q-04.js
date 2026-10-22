// Print consonants of Programming in reverse order.
const text = "Programming";
const vowels = "aeiou";
let consonants = "";
for (let i = text.length - 1; i >= 0; i--) {
  if (!vowels.includes(text[i].toLowerCase())) consonants += text[i];
}
console.log(consonants);
