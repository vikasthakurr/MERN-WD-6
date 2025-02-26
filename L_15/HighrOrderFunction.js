//4 higher order function in javascript.
// we can call a function a higher order function only on two condition:
//1. it should accept a function as its parameter
//2. it should return a function as its result

// function greetings(name) {
//     return function (message) {
//       console.log(`Hello ${name}, ${message}`);
//     };
//   }
  
//   let vikas = greetings("Akash");
  
//   vikas("Good Morning");


// map function is javascript

// let arr = [1, 2, 3, 4, 5];   

// let doubleNumber = arr.map(num => num*num);
// console.log(doubleNumber);
// console.log(arr);


//filter function in javascript

// let number = [1,2,3,4,5,6];

// let even= number.filter(num => num % 2===0);
// console.log(even);
// console.log(number);


// reduce function in javascript

// let number = [1,2,3,4,5];
// let total = number.reduce((acc, num)=> acc+num, 0);
// console.log(total);