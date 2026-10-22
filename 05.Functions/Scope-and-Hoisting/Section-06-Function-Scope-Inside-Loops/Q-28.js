// Q28. The loop executes three times, for values 5, 6 and 7. The final local value is 8.

function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();

// Expected output:
// 5
// 6
// 7
// Final value: 8
