// Q53. inner is local to outer. Calling it outside raises ReferenceError and stops execution before outer(). Call inner inside outer to fix it.

function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
inner();
outer();

// Expected output:
// ReferenceError: inner is not defined
