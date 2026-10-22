// Q5. The function can read its own variable and the enclosing variable.

var city = "Surat";
function display() {
  var country = "India";
  console.log(city);
  console.log(country);
}
display();
console.log(city);

// Expected output:
// Surat
// India
// Surat
