// Q49. changeColor has its own color binding. The outer color remains Blue.

var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);

// Expected output:
// Inside: Red
// Outside: Blue
