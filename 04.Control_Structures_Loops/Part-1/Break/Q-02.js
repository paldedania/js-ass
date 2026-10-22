// Ask for a password up to five times; stop on success.
const readline = require("node:readline");
async function checkPassword() {
  const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  const lines = input[Symbol.asyncIterator]();
  const correctPassword = "javascript123";
  let accessGranted = false;
  for (let attempt = 1; attempt <= 5; attempt++) {
    process.stdout.write(`Password (attempt ${attempt}/5): `);
    const answer = await lines.next();
    if (answer.done) break;
    if (answer.value === correctPassword) {
      console.log("Access granted");
      accessGranted = true;
      break;
    }
  }
  if (!accessGranted) console.log("Account locked");
  input.close();
}
checkPassword().catch(console.error);
