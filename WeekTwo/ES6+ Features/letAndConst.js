// let is used for variables that can be reassigned, and const is for variables that shouldn't be reassigned.
// let and const are block scoped, meaning they are only available within the block they are declared in

let variable1 = "Hello";
const variable2 = "World";
variable1 = "Hi"; // This is okay
variable2 = "Everyone"; // This will throw an error
