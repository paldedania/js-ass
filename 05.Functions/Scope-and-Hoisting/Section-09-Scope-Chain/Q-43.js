// Q43. deep can read all three variables: a from the outer scope, b from level1 and c from level2.

var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();

// Expected output:
// 1 2 3
