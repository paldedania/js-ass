const calculateSimpleInterest = function(principal, rate, time) {
  return principal * rate * time / 100;
};

console.log(calculateSimpleInterest(10000, 5, 2));
