// Q54. The returned show function forms a closure that retains access to greeting after createMessage returns.

function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();

// Expected output:
// Hello students
