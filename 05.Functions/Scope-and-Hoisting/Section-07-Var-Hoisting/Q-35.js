// Q35. The local price shadows the outer price throughout showPrice and starts as undefined. The outer price stays 100.

var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);

// Expected output:
// undefined
// 100
