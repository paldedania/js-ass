// Q3. college is outer/global. name and age are local to student; subject is local to teacher.

var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}

// Expected output:
// No output. The functions are defined but never called.
