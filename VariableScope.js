// SCOPE OF VARIABLES IN JAVASCRIPT
// In JavaScript, the scope of a variable determines where that variable can be accessed or referenced in the code. There are three main types of variable scope: global scope, function scope, and block scope.

//1. Global Scope
// A variable declared outside of any function or block is in the global scope. It can be accessed from anywhere in the code.

var text = "This is a global variable";

{
    console.log(text); // Accessible here
}
let displayText = () => {console.log(text);} // Accessible here
displayText();

function showText() {
    console.log(text); // Accessible here
}
showText(); // Calling the function to demonstrate access

//2. Function Scope
// A variable declared within a function is in the function scope. It can only be accessed within that function.
function myFunction() {
    var functionVar = "This is a function-scoped variable";
    console.log(functionVar); // Accessible here
}
myFunction(); // Calling the function to demonstrate access

console.log(functionVar); // Not accessible here, will throw an error

//3. Block Scope
// A variable declared with let or const within a block (e.g., inside curly braces {}) is in the block scope. It can only be accessed within that block.
{
    let blockVar = "This is a block-scoped variable";
    const blockConst = "This is a block-scoped constant";
    console.log(blockVar); // Accessible here
    console.log(blockConst); // Accessible here
}

console.log(blockVar); // Not accessible here, will throw an error
console.log(blockConst); // Not accessible here, will throw an error