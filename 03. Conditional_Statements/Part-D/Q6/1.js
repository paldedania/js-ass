let email = "student@example.com";
if (email.includes("@")) {
  if (email.endsWith(".com")) {
    if (email.length > 10) {
      console.log("Valid Email");
    }
  }
}
// Output: Valid Email
