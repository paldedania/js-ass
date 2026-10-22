// Q30. var i belongs to printNumbers. Its value is 6 after the loop. Access outside the function raises ReferenceError.

function printNumbers() {
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log(i);
}
printNumbers();
console.log(i);

// Expected output:
// 1
// 2
// 3
// 4
// 5
// 6
// ReferenceError: i is not defined
