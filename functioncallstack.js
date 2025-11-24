//FUNCTION CALLSTACK
// It is a mechanism that helps in the execution of function calls in a program. It follows the LIFO (Last In First Out) principle, meaning the last function called is the first one to be executed and completed.

function d(){
    console.log("Function d started");
}
function c(){
    console.log("Function c started");
    d();
}
function b(){
    console.log("Function b started");
    c();
}
function a(){
    console.log("Function A started");
    b();
}

a();

// when function a is called, in stack first func a is loaded, then func b, then func c, and finally func d.
// and when func d completes its execution, it is removed from the stack, and control returns to func c, and so on, until all functions are executed and the stack is empty.