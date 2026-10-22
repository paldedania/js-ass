// Q26. var number belongs to calculate, so it is accessible after the loop inside calculate, but not outside.

function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();

// Expected output:
// 10
// 20
// 30
// Final: 4
