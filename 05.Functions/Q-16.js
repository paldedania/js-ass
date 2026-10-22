const calculateGrade = function (percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 40) return "D";
  return "F";
};
console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));
