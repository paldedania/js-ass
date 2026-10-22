// Q51. inner can access student locally and teacher in outer. Neither variable is accessible outside outer.

function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();

// Expected output:
// Jenil
// Kartik Sir
