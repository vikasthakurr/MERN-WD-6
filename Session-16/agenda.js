//function revise.
//scope of function
//global
//function
//block
//lexical
//scope chaining
// closures

// let arr =[1,2,3,45];

// let arr2 = new Array (1,3,4,5,6);
// console.log(arr2);
// console.log(arr);

// let number = [1,2,3,4,5];

// for(let i=0; i<number.length; i++)
// {
//     console.log(number[i]);
// }
// number.push (6);
// number.unshift(0);
// console.log(number);

// number.pop();
// number.shift();
// console.log(number);

// let details = {
//     name: "Vikas",
//     age: 25,
//     address: "Delhi",
// }
// console.log(details);
// console.log(details.name);
// console.log(details["age"]);

// details.name ="Shivam";
// console.log(details.name);

// delete details.name;
// console.log(details);

// console.log(Object.keys(details));
// console.log(Object.values(details));
// console.log(Object.entries(details));

let details = [
  {
    name: "Vikas",
    age: 20,
    address: "Delhi",
  },
  {
    name: "Shivam",
    age: 25,
    address: "Delhi",
  },
  {
    name: "Vishal",
    age: 30,
    address: "Delhi",
  },
];

// console.log(details[0].name);
let filterDetails = details.filter(detail => detail.age >=25);
console.log(filterDetails);