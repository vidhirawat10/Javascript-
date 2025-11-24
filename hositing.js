//HOISTING
// It is a JS mechanis where variables and function declartions are shifted to the top of their scope before code execution.

//1. Function Hoisting

let ans2 = greet(); // this works because of hoisting --> func declaration is shifted to top 

function greet(){
    console.log("Hello everyone");
}

let ans = greet(); // this func naturally works here 

//2. Variable Hoisting

console.log(x); // undefined due to hoisting --> declaration is shifted to top but not the assignment

 var x = 5;

console.log(x); // this works fine as x is declared before use

// Note: Hoisting works with 'var' keyword. 'let' and 'const' do not hoist in the same way and will throw a ReferenceError if accessed before declaration.

//3. Hoisting using function expression 

greet2(); // this throws an error as greet2 is not declared before use

console.log(greet2); // undefined due to hoisting --> hence if function expression is used here, only the variable declaration with "var" is hoisted, not with let or const

var greet2 = function () {
    console.log("greet again");
}

greet2(); // this works fine as greet2 is declared before use



