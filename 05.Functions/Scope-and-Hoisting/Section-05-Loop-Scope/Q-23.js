// Q23. i is in the enclosing scope and remains accessible after the loop, with value 2.

var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);

// Expected output:
// 5
// 4
// 3
// After loop: 2
