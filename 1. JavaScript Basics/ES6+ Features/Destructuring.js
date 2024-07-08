// Destructuring allows unpacking values from arrays or properties from objects.

// Array Destructuring
const numbers = [1, 2, 3, 6];
const [one, two, three, four] = numbers;
console.log(one, two, three, four); // Output: 1 2 3

// Object Destructuring
const person = { name: "Jane", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Jane 30
