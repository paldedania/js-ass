// Print the table of 6 through 12, skipping products divisible by 5.
for (let multiplier = 1; multiplier <= 12; multiplier++) {
  const product = 6 * multiplier;
  if (product % 5 === 0) continue;
  console.log(`6 x ${multiplier} = ${product}`);
}
