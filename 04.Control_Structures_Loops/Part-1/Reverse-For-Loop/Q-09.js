// Find the first score above 80 from the end, then break.
const scores = [90, 85, 70, 95, 60, 88, 75];
for (let i = scores.length - 1; i >= 0; i--) {
  if (scores[i] > 80) {
    console.log("Score:", scores[i]);
    console.log("Index:", i);
    break;
  }
}
