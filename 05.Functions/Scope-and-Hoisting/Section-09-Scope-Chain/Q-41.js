// Q41. Lookup starts in batch for year, then department for dept, then the outer scope for institute.

var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();

// Expected output:
// 2025
// CSE
// CodingGita
