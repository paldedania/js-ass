// With i starting at 0, <= runs one extra iteration at i === students.length.
// Accessing that index returns undefined.
var students = ["Jenil", "Mahir", "Priyesha"];
for (var i = 0; i <= students.length; i++) {
    console.log(students[i]); // Jenil, Mahir, Priyesha, then undefined
}
