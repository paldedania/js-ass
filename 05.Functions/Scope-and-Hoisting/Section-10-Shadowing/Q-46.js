// Q46. The local score shadows the outer score, without changing it.

var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);

// Expected output:
// 90
// 50
