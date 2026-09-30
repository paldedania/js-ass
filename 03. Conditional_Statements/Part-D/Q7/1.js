let cartTotal = 1500;
let isPremiumMember = true;
let finalAmount = cartTotal;
if (cartTotal >= 1000) {
  if (isPremiumMember) {
    finalAmount = cartTotal * 0.80;
  } else {
    finalAmount = cartTotal * 0.90;
  }
}
console.log(`Final amount: ₹${finalAmount}`);
// Output: Final amount: ₹1200
