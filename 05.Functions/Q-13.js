// A nested function is a function defined inside another function.
function studentReport(name, m1, m2, m3) {
  function total() {
    return m1 + m2 + m3;
  }
  return name + " total marks: " + total();
}
console.log(studentReport("Asha", 80, 90, 70));
