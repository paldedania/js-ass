// Q32. The local var a shadows the outer a throughout test, even before the local assignment.

var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

// Expected output:
// undefined
// 20
