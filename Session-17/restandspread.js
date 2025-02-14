// let obj1 = {
//   name: "Vikas",
//   age: 25,
//   isWorking: true,
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// };

// let obj2 = obj1;

// obj2.name = "Akash";
// obj1.address.city = "Noida";
// console.log(obj2);
// console.log(obj1);

// spread operator in javascript

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [7,8,9,10];

// let result= [...arr1, ...arr2];
// console.log(result);

// let result = arr1.concat(arr2);
// console.log(result);

// let  arr3 =["apple", "banana", "orange", "grapes"];

// let [first, second,...others] =arr3;
// console.log(first);
// console.log(second);
// console.log(others);

// let emp = {
//   id: 100,
//   name: "Vedant",
//   department: "IT",
//   salary: 5000,
// };

// let {id, name , ...rest} =emp;
// console.log(id);
// console.log(name);
// console.log(rest);

// let details = {
//     fname: "Vedant",
// }

// let {fname , lname ="not availble"}= details;
// console.log(fname);
// console.warn(lname);

// let coordinate =[10,[4,6]];
// let [x,[y,z]] = coordinate;
// console.log(x);
// console.log(y);
// console.log(z);

// let response = {
//   status: 200,
//   data: {
//     user: {
//       name: "Vedant",
//       age: 23,
//       address: "Delhi",
//     },
//   },
// };

// let {data:{user:{name, age ,address}}} = response;
// console.log(name, age, address);

// const person = {
//   name: "Vedant",
//   age: 23,
//   address: "Delhi",
// };
// console.log(person);

// let jsonstring = JSON.stringify(person);
// console.log(jsonstring);

// const jsondata ='{"name":"Vedant","age":"23","address":"Delhi"}';
// const obj = JSON.parse(jsondata);
// console.log(obj);