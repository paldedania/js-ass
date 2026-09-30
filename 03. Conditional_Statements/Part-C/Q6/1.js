let dayNumber = 6;
if (dayNumber >= 1 && dayNumber <= 5) {
  console.log("Weekday");
} else if (dayNumber === 6 || dayNumber === 7) {
  console.log("Weekend");
} else {
  console.log("Invalid day number");
}
// Output: Weekend
