// function functioname(paremeters){
//     //logic or function body
// }
// functioname();

//named function
// function sum (a,b){
//     console.log(a+b);
// }
// sum();

//anonymous function

// var sum =function(a,b){
//     return a+b;
// }
// console.log(sum(5,6));

//arrow function (method of writing function in ES6)

// const sum =(a,b) => console.log(a+b);

// let square =(num) => num*num;
// console.log(square(6));

//global scope

// let a= 6;

// function print(){
//     console.log(a);
// }
// print();
// console.log(a);

//function scope

// function print(){
//     let a=6;
//     console.log(a);
// }
// print();
// console.log(a); // error : a is defined  because a was in function scope

//block scope (ES6 let and const)

// if(true){
//     const localVar = 5;
//     console.log(localVar);
// }
// console.log(localVar);

//lexical scope

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }
// outer();

let globalVar = "I am Global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    let innerVar = "I am inner";

    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  inner();
}
outer();
