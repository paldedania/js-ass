// Q22. The loop reuses count, replacing 10 with 1 and eventually incrementing it to 4.

var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);

// Expected output:
// 1
// 2
// 3
// Count: 4
