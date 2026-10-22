// Q8. No error. marks is assigned 75 before displayMarks is called.

function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

// Expected output:
// 75
