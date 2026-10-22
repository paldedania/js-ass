// Q45. The innermost function reads its own variable, then the middle and outer function variables.

function outer() {
  var outerValue = "Outer";
  function middle() {
    var middleValue = "Middle";
    function inner() {
      var innerValue = "Inner";
      console.log(innerValue);
      console.log(middleValue);
      console.log(outerValue);
    }
    inner();
  }
  middle();
}
outer();

// Expected output:
// Inner
// Middle
// Outer
