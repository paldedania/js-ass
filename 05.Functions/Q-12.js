function analyzeStudent(name, m1, m2, m3) {
  var total = m1 + m2 + m3;
  var average = total / 3;
  return name + " scored total " + total + " with average " + average;
}
console.log(analyzeStudent("Asha", 80, 90, 70));
console.log(analyzeStudent("Ravi", 60, 70, 80));
