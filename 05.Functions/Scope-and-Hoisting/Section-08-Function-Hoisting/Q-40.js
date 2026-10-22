// Q40. The function is available before its declaration. The enclosing variable is assigned before the call.

var college = "CodingGita";
greet();
function greet() {
  console.log("Welcome to " + college);
}

// Expected output:
// Welcome to CodingGita
