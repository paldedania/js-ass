let isAdmin = true;
let hasToken = false;
let isSuspended = false;

result = (isAdmin || hasToken) && !isSuspended;
console.log(result);