// Q18. A standalone block does not create a new scope for var. The same message becomes End.

var message = "Start";
{
    var message = "End";
}
console.log(message);

// Expected output:
// End
