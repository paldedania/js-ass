// Yes. Assigning to a higher array index extends its length.
// Skipped indexes become empty slots, which read as undefined.
var marks = [80, 75, 90];
marks[6] = 100;
console.log(marks); // [80, 75, 90, <3 empty items>, 100]
console.log(marks.length); // 7
console.log(marks[3]); // undefined
