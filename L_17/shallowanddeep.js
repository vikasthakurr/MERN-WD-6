// let obj1 = {
//   name: "Vikas",
//   age: 24,
//   salary: 5000,
//   address : {
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   }
// };

// let obj2 =obj1;
// obj2.name ="Mayank";
// console.log(obj2);
// console.log(obj1);

// spread operators..... shallow copy
// let obj2 = {...obj1};
// obj2.name = "Mayank";
// obj2.address.city ="nagpur";
// console.log(obj2);
// console.log(obj1);

// let obj1 = {
//     name: "Vikas",
//     age: 24,
//     salary: 5000,
//     address : {
//       city: "Delhi",
//       state: "Delhi",
//       country: "India",
//     }
//   };

//   let obj2 = Object.assign({},obj1);
//   obj2.name ="Mayank";
//   obj2.address.city ="nagpur"

//   console.log(obj2);
//   console.log(obj1);

// let arr1 = [1,2,4,6,[7,8,9]];

// let arr2 = [...arr1];

// arr2[2][2] = 56;
// console.log(arr2[2][2]);

//deep copy => we create a independent copy of the object and can make changes in nested components as well...

// let obj1 = {
//   name: "vikas",
//   age: 25,
//   address: {
//     city: "delhi",
//     state: "delhi",
//     country: "india",
//   },
// };

//using string and json methods

// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name = "mayank";
// obj2.address.city = "nagpur";
// console.log(obj2);
// console.log(obj1);

// using structuredClone method (modern method of deep cloning)
// let obj1 = {
//   name: "vikas",
//   age: 25,
//   address: {
//     city: "delhi",
//     state: "delhi",
//     country: "india",
//   },
// };

// let obj2 = structuredClone(obj1);
// obj2.age = 56;
// obj2.address.city = "nagpur";
// console.log(obj2);
// console.log(obj1);

// let obj1 = {
//   name: "vikas",
//   age: 25,
//   address: {
//     city: "delhi",
//     state: "delhi",
//     country: "india",
//   },
//   contact: {
//     primary: 1233455,
//     secondary: 456777,
//   },
// };
