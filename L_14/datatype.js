// Primitive data types
// 1. String

// let myName = "mayank"
// console.log(myName)
// console.log(typeof myName);
// 2. Number ==> till range of 2^53 if big number then 

// let age = 25;
// let salary = 100.5;

// console.log(age , typeof age);
// console.log(salary , typeof salary);


// 3. bigint

// let num = 9007199254740991123654446;
// console.log(num , typeof num);


// 4. Boolean
// true or false

// let isLoggedin = false;
// console.log(isLoggedin , typeof isLoggedin);


// 5. Undefined

// let x;
// console.log(x , typeof x);
// 6. Null ==> is a standalone value of its own type which represents the intentional absence of any object value.

//  let x= null;
//  console.log(x , typeof x);

// Non-primitive data types or reference type data types
// 1. Object

// let person ={
//     "name": "mayank",
//     "age": 25,
//     "salary": 100.5,
//     "Address" : "Delhi"
// }

// console.log(person);
// console.log(typeof person);
// console.log(person.age);
// person.age =60;
// console.log(person.age);
// console.log(person);

// 2. Array

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// console.log(typeof arr);


// 3. Function
// function is a piece of code that can be reused in case we need them later.
// by using function we can prevent the repetition of code.

function add (a,b){
    var ans = a+b;
    return ans;
}

console.log(add(10,15));

// var add = function (a,b){
//     var ans = a+b;
//     return ans;
// }

// console.log(add(10,15));
