// Q42. globalVar and outerVar are found in enclosing scopes. innerVar has no declaration anywhere in the scope chain.

var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();

// Expected output:
// I am global
// I am outer
// ReferenceError: innerVar is not defined
