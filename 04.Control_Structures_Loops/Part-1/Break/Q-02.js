// Run in a browser console. prompt() is provided by the browser.
const correctPassword = "javascript123";
let accessGranted = false;
for (let attempt = 1; attempt <= 5; attempt++) {
  const password = prompt("Enter password (attempt " + attempt + " of 5):");
  if (password === correctPassword) {
    console.log("Access granted");
    accessGranted = true;
    break;
  }
}
if (!accessGranted) console.log("Account locked");
