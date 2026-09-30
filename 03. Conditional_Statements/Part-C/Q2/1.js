let income = 500000;
// Tax is income multiplied by its bracket rate.
let taxRate;
if (income < 300000) {
  taxRate = 0;
} else if (income <= 700000) {
  taxRate = 0.05;
} else if (income <= 1000000) {
  taxRate = 0.10;
} else {
  taxRate = 0.15;
}
let tax = income * taxRate;
console.log(`Tax amount: ₹${tax}`);
// Output: Tax amount: ₹25000
