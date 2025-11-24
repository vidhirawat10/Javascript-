// WHY FUNCTION IS ASLO CALLLED AS FIRT CLASS CITIZEN

// In JavaScript, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows for higher-order functions and functional programming techniques.

//1. Assigning a function to a variable
 let meet = function(){
    console.log("A meets B");
 }

 meet(); // calling the function using the variable name

 //2. Passing a function as an argument to another function

 function meetNew(meetold, name){
    console.log(name, "meeting started");
    meetold(); // calling the passed function
 }

 function meetold(){
    console.log("meeting finished");
 }

 meetNew(meetold, "Team A");

 //3. Returning a function from another function

 function greet(){
    console.log("greet function");
    return greetagain();
 }

 function greetagain(){
    console.log("greet again function");
  }

  let ans = greet();
  let ans2 = greetagain();

  //4. Storing functions in data structures

  let funcarray= [
    () => { console.log("Function 1 in array"); },
    () => { console.log("Function 2 in array"); },
    () => { console.log("Function 3 in array"); },
    () => { console.log("Function 4 in array"); }
  ]

  funcarray[0](); // calling first function in array
  funcarray[2](); // calling third function in array

  //5. Using functions as object properties (methods)
 let obj =  {
    age: 20,
    name: "Vidhi",
    course: "Btech CSE-AI",
    greet: function(){ 
        console.log("Hello from object method");
    }
}

obj.age;
obj.greet();

// In all these examples, functions are treated as first-class citizens in JavaScript, allowing for flexible and powerful programming patterns.