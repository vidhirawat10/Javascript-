console.log("Vidhi Rawat");
console.log("CSE-AI");

// ARITHEMTIC OPERATORS
console.log("a+b=",5+3);
console.log(c=5);
c++;
console.log("a+1=",c++);
console.log(c); 

// ASSIGNMENT OPERATORS
let a=3;
let b=4;

a+=4; 
console.log(a);
a-=4; 
console.log(a);
a*=4; 
console.log(a);
a/=4; 
console.log(a);

// COMPARISON OPERATORS
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);                  

// LOGICAL OPERATORS
console.log((a==b) && (a<b));
console.log((a==b) || (a<b));
console.log(!(a==b));

//CONDITIONAL STATEMENTS
let age, umar;
age=16;
umar=19;

if(age>18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

if(umar>18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

//TERNARY OPERATOR
let age2=18;
let result = age2 >= 18 ? "adult" : "not adult";
console.log(result);

// SWITCH STATEMENT
let day = 3;
switch(day){
    case 1:1
        console.log("Monday");
        break;
    case 2:2
            console.log("Tuesday");
        break;    
    case 3:3
            console.log("Wednesday");
        break;
    case 4:4    
            console.log("Thursday");
        break;    
    default:
        console.log("Invalid day"); 
}  

//Q1
 let num = prompt("Enter a number:");
 if(num % 5 ==0){
    console.log("Divisible by 5");
 }
 else{
    console.log("Not divisible by 5");
 }