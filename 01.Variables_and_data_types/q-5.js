// Part A: Object
let student = {
  name: "Meet",
  age: 18,
  isEnrolled: true
};

console.log("Student:", student);
console.log("Student name:", student.name);
console.log("Student age:", student.age);

// Part B: Arrays
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);
console.log("Mixed array:", mixed);

// Single-type arrays are easier to understand, process, validate, and sort.

// Part C: Function
function greet(name) {
  return "Hello, " + name + "!";
}

let message1 = greet("Alice");
let message2 = greet("Bob");
console.log(message1);
console.log(message2);
