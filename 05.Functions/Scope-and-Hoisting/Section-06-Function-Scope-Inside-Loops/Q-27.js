// Q27. All reads inside student work, including the post-loop value 90. The outside read raises ReferenceError.

function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);

// Expected output:
// 60
// 70
// 80
// 90
// ReferenceError: marks is not defined
