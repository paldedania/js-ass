// Q10. updateSchool changes the existing school variable.

var school = "Sunrise School";
function showSchool() {
  console.log(school);
}
function updateSchool() {
  school = "Green Valley School";
}
showSchool();
updateSchool();
showSchool();
console.log(school);

// Expected output:
// Sunrise School
// Green Valley School
// Green Valley School
