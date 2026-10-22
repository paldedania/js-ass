// Q55. display reads name and course from its enclosing studentInfo scope.

function studentInfo() {
  var name = "Pal";
  var course = "JavaScript";
  function display() {
    console.log(name);
    console.log(course);
  }
  display();
}
studentInfo();

// Expected output:
// Pal
// JavaScript
