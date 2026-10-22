// Q1. city is in the outer/global scope; country is local to display. Both are accessible inside display.

var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();

// Expected output:
// Surat
// India
