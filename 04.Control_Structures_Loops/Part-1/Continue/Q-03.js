const text = "Hello World";
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") continue;
  console.log(text[i]);
}
