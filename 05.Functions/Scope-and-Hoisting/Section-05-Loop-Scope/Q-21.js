// Q21. var number belongs to the enclosing scope. The last increment makes it 8.

for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);

// Expected output:
// 2
// 4
// 6
// Final: 8
