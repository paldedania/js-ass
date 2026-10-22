// Q24. No error. var item is accessible after the loop and has been incremented to 4.

for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);

// Expected output:
// Item: 1
// Item: 2
// Item: 3
// Last item: 4
