// Arrow functions provide a shorter syntax and don't have their own this context.

const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

const addTwo = (c, d) => c + d;
console.log(add(5, 7));
