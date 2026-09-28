let prompt = require("prompt-sync")();
let number = prompt("Enter a number: ")

if (number % 2 == 0) {
    console.log(`${number} is Even.`)
} else {
    console.log(`${number} is Odd.`)
}