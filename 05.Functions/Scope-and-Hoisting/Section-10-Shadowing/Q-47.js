// Q47. The local name and outer name are separate bindings. The local assignment leaves the outer name unchanged.

var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);

// Expected output:
// Local Name
// Global Name
