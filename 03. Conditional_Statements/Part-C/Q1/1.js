let month = 7;
if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Summer");
} else if (month >= 6 && month <= 8) {
  console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else {
  console.log("Invalid month");
}
// Output: Monsoon
