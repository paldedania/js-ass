// Q20. let creates a block-scoped secret. Access after the block raises ReferenceError.

if (true) {
  let secret = "Hidden";
}
console.log(secret);

// Expected output:
// ReferenceError: secret is not defined
