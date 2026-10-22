// Q48. No local value is declared, so assignment updates the enclosing value binding. Using var would create a separate local binding.

var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);

// Expected output:
// 20
// 20
