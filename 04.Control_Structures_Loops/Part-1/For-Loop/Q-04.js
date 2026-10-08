const text = "JavaScript";
const vowels = "aeiouAEIOU";
let consonants = "";
for (let i = 0; i < text.length; i++) {
  if (!vowels.includes(text[i])) consonants += text[i];
}
console.log(consonants); // JvScrpt
