function generateReport(name, m1, m2, m3) {
  var total = m1 + m2 + m3;
  var average = total / 3;
  var result = average >= 40 ? "Pass" : "Fail";
  return "Student: " + name + "\nTotal: " + total +
    "\nAverage: " + average.toFixed(2) + "\nResult: " + result;
}
console.log(generateReport("Asha", 80, 90, 70));
console.log(generateReport("Ravi", 30, 35, 40));
