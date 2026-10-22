// Q50. The local marks shadows the outer marks inside the function.

var marks = 70;
function showMarks() {
  var marks = 95;
  console.log(marks);
}
showMarks();
console.log(marks);

// Expected output:
// 95
// 70
