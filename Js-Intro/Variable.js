// variable in javascript

// variable is a container to store data values
// var, let, const

// a=5;
// a='6';
// console.log(a);

// var
// var b=5;
// var b=7;
// console.log(b);

// let
// let c=5;
// c=8;
// console.log(c);

// const
// const d=5;
// const d=8;
// console.log(d);


// variable in javascript
// variable is a container to store data values
// var, let, const
//var and let can be re-declared, but const cannot be re-declared.
// var can be updated and re-declared within its scope; let can be updated but not re-declared; const cannot be updated or re-declared.
// var has a function scope; let has a block scope.
// var can be hoisted to the top of its scope; let cannot be hoisted.
// const is a constant reference to a value. It cannot be re-assigned.


const accountID = 1234;
let accountName = 'John Doe';
var accountBalance = 5000;
accountAddress= "Noida";

console.log(accountID);
console.log(accountName);
console.log(accountBalance);
console.log(accountAddress);

console.table({accountID, accountName, accountBalance, accountAddress});


// try not to use var because it create issue in  block and function scope and also hoisting.
// use let and const instead of var.
// use const when you are sure that the value will not change in future.
// use let when you are sure that the value will change in future.
// use var when you are sure that you need hoisting and function scope.
