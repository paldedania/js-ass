const text = "Programming";
const vowels = "aeiouAEIOU";
let consonants = "";
for (let i = text.length - 1; i >= 0; i--) {
  if (!vowels.includes(text[i])) consonants += text[i];
}
console.log(consonants); // gnmmrgrP
