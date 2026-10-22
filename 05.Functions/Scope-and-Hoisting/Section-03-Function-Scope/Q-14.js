// Q14. Each call creates a new local result initialized to 40, then changes it to 50. It is not accessible outside.

function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();

// Expected output:
// 50
// 50
