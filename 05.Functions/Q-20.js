function processStudent(name, m1, m2, m3) {
  function calculateMarks() {
    var total = m1 + m2 + m3;
    return { total: total, average: total / 3 };
  }
  var marks = calculateMarks();
  var result = marks.average >= 40 ? "Pass" : "Fail";
  return "Student: " + name + "\nTotal: " + marks.total +
    "\nAverage: " + marks.average.toFixed(2) + "\nResult: " + result;
}
function compareAverages(avg1, avg2) {
  if (avg1 > avg2) return "First average is higher";
  if (avg2 > avg1) return "Second average is higher";
  return "Both averages are equal";
}
console.log(processStudent("Asha", 80, 90, 70));
console.log(processStudent("Ravi", 30, 35, 40));
console.log(processStudent("Neha", 40, 40, 40));
console.log(compareAverages(80, 35));
console.log(compareAverages(35, 40));
console.log(compareAverages(40, 40));
