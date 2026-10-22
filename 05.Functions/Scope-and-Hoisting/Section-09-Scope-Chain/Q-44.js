// Q44. second finds the nearest x in first. The final read uses the outer x.

var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);

// Expected output:
// first
// global
