let mark1 = 78;
let mark2 = 92;
let mark3 = 85;
if (mark1 >= mark2 && mark1 >= mark3) {
  console.log(`Highest mark: ${mark1}`);
} else if (mark2 >= mark1 && mark2 >= mark3) {
  console.log(`Highest mark: ${mark2}`);
} else {
  console.log(`Highest mark: ${mark3}`);
}
// Output: Highest mark: 92
