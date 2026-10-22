// Q60. Declaring var total inside calculate keeps total local. The outside read now raises ReferenceError.

function calculate() {
  var total = 0;
  for (var i = 1; i <= 5; i++) {
    total = total + i;
  }
  console.log(total);
}
calculate();
console.log(total);

// Expected output:
// 15
// ReferenceError: total is not defined
