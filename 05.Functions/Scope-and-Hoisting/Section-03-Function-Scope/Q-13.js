// Q13. The local number shadows the outer number. They are separate variables.

var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);

// Expected output:
// 25
// 15
