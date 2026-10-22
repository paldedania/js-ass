// As written in the assignment, the code throws a SyntaxError because
// console.log is missing its closing parenthesis. Nothing is printed.
// indexOf must also be called on colors; fixing only the parenthesis
// would leave a ReferenceError because indexOf is not a global function.
// Corrected code:
const colors = ["Red", "Blue", "Green"];
for (const color of colors) {
    console.log(color, colors.indexOf(color));
}
// Output:
// Red 0
// Blue 1
// Green 2
