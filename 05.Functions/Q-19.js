// A function expression cannot be called before its assignment executes.
// With var, its value is undefined and calling it throws TypeError.
// With let/const, access before initialization throws ReferenceError.
function calculateBill(price, quantity, discountPercent) {
  function subtotal() {
    return price * quantity;
  }
  var total = subtotal();
  return total - total * discountPercent / 100;
}
console.log(calculateBill(200, 3, 10));
