// Local variables belong to their function. An outer variable is available
// to functions defined in that scope. Node files have module-level top scope.
function displayAge() {
  var age = 20;
  console.log(age);
}
displayAge();
try {
  console.log(age);
} catch (error) {
  console.log(error.name + ": " + error.message);
}
// ReferenceError: age is not defined, because age is local to displayAge.
var course = "JavaScript";
function displayCourse() {
  console.log(course);
}
displayCourse();
