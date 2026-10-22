// Q6. play reads game from the enclosing scope.

var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

// Expected output:
// I like Cricket
// Cricket
