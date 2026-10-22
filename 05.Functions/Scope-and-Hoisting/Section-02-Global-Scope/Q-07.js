// Q7. changeLanguage assigns the existing outer language binding, so later reads see Gujarati.

var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);

// Expected output:
// English
// Gujarati
// Gujarati
