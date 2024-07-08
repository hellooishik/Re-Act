// JavaScript modules allow you to import and export code between files.
// in math.js

// Expoting the Modules
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Importing the Modules

// in main.js
import { add, subtract } from "./math.js";
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
