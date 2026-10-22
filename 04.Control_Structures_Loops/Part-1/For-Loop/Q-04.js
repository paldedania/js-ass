// Remove vowels from JavaScript.
const text = "JavaScript";
const vowels = "aeiou";
let consonants = "";
for (let i = 0; i < text.length; i++) {
  if (!vowels.includes(text[i].toLowerCase())) consonants += text[i];
}
console.log(consonants);
