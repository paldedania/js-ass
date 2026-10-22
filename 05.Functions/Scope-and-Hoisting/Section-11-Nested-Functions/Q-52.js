// Q52. grandchild can read a from parent, b from child and c locally. Parent cannot read b or c; child cannot read c.

function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();

// Expected output:
// Parent
// Child
// Grandchild
