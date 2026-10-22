// Q19. The var declaration is initialized to undefined before execution. The false branch skips only its assignment.

if (false) {
    var result = 100;
}
console.log(result);

// Expected output:
// undefined
