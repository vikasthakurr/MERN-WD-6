// function in javascript

// function functionName (parameters){
//     // function body
// }
// functionName(arguments); // calling of a function or invocation of a function

// 1. named function in javascript

// function add (a,b){
//     return a+b;
// }
// console.log(add(5,6));

// 2. anonymous function in javascript

// let mul=function (a,b){
//     return a*b;
// }
// console.log(mul(5,6));

// 3. arrow function in javascript

// let add = (a,b) =>{
//     return a+b;
// }
// console.log(add(5,6));

// let square = (value) => value*value;
// console.log(square(5));

//4 higher order function in javascript.
// we can call a function a higher order function only on two condition:
//1. it should accept a function as its parameter
//2. it should return a function as its result

function greetings(name) {
  return function (message) {
    console.log(`Hello ${name}, ${message}`);
  };
}

let vikas = greetings("Akash");

vikas("Good Morning");
