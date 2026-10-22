// Q38. greet is undefined at the call, so greet() raises TypeError. The expression assignment is never reached.

greet();
var greet = function() {
    console.log("Hi");
};

// Expected output:
// TypeError: greet is not a function
