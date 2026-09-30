let units = 175;
let bill;
if (units <= 50) {
  bill = units * 2;
} else if (units <= 150) {
  bill = 50 * 2 + (units - 50) * 4;
} else {
  bill = 50 * 2 + 100 * 4 + (units - 150) * 6;
}
console.log(`Total bill: ₹${bill}`);
// Output: Total bill: ₹650
