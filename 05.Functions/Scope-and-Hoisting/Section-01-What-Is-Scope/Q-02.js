// Q2. price is outer/global; tax is local. calculate adds 500 + 50.

var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);

// Expected output:
// 550
// 500
