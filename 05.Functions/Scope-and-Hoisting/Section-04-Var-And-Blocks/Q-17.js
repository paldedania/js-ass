// Q17. The second var redeclares the same number binding and assigns 2.

var number = 1;
if (true) {
    var number = 2;
}
console.log(number);

// Expected output:
// 2
