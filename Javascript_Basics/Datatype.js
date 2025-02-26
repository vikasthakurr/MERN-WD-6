// /*data types in javascript
// What is 'use strict' in js;
// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// 1. Primitive data types (uses stack type memory)
// 2. Non-primitive data types (uses heap type memory)

// Primitive data types
// 1. String
// 2. Number ==> till range of 2^53 if big number then 
// 3. bigint
// 4. Boolean
// 5. Undefined
// 6. Null ==> is a standalone value of its own type which represents the intentional absence of any object value.

// Non-primitive data types
// 1. Object
// 2. Array
// 3. Function


// what is typOf in javascript
// The typeof operator is used to get the data type (returns a string) of its operand.

// */

// // example of data types in javascript
// let name = "John Doe";
// let age = 5;
// let isAdult = true;
// let salary = 5000.5;
// let x;

// console.log(typeof name); // String
// console.log(typeof age); // Number
// console.log(typeof isAdult); // Boolean
// console.log(typeof salary); // Number
// console.log(typeof x); // Undefined

// // object is js
// // what is object is js ==> An object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

// // how to create object in js
// let person = {
//   name: "John Doe",
//   age: 25,
//   isAdult: true,
//   salary: 5000.5,
// };
// console.log(person);

// // Array in js
// // what is array in js ==> An array is a special variable, which can hold more than one value at a time.
// // how to create array in js
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits);

// // Function in js
// // what is function in js ==> A function is a block of code that is designed to perform a particular task. A function is executed when "something" invokes it (calls it).
// // how to create function in js
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 6));


// var age =25; 

// var age2 = age;
// age2=50;
// // console.log(typeof age); //number


// console.log(age);
// console.log(age2);


// const prompt=require("prompt-sync")();
// let name = prompt("Enter your name");
// console.log(name);

// function add (a,b){
//   var ans = a+b;
//   return ans;
// }

// console.log(add(5,6));


// var add = function(a , b){
//   var ans = a+b;
//   return ans;

// }

// console.log(add(5,6));


// var add = (a,b) =>{
//   var sum = a+b;
//   return sum;
// }

// console.log(add(5,6));