// Q34. The local total starts as undefined, then receives 50. Equivalent form: var total; console.log(total); total = 50; console.log(total);

function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();

// Expected output:
// undefined
// 50
