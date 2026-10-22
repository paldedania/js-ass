// Q9. message is local to showColor. The last statement raises ReferenceError.

var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);

// Expected output:
// Favorite color: Red
// Red
// ReferenceError: message is not defined
