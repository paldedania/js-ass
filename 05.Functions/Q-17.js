function calculateFinalPrice(price, discountPercent) {
  return price - price * discountPercent / 100;
}
console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));
