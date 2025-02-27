// const cart = ["product1", "product2", "product3", "product4", "product5"];

// createOrder(cart, function(orderId){
//     proccedtoPayment(orderId,);
// })

// const promise = createOrder(cart);
// promise. then(function(orderId){
//     proccedtoPayment(orderId);
// })

// let a = 10;
// let b =9;

// const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
// console.log(response);
// console.log(a+b);

// function makeMaggi(raw) {
//   return new Promise((resolve, reject) => {
    // let raw = true;
//     if (raw) {
//       resolve("maggi is ready");
//     } else {
//       reject("maggi is not ready");
//     }
//   });
// }
// makeMaggi(true);

// const p1 = Promise.resolve("success");
// p1.then((res)=>{
//     console.log(res);
// })

// const fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     reject(data);
//   }, 2000);
// });

// fetchData
//   .then((data) => {
//     console.log("Data loading:", data);
//   })
//   .then(() => {
//     console.log("Data received");
//   })
//   .then(())
//   .catch((error) => {
//     console.log("Error:", error);
//   });


// Promise.resolve

// const promise1 = Promise.resolve("success");
// promise1.then((res)=>{
//     console.log("promise1",res);
// })


//promise.reject

// const promise1 = Promise.reject("success");
// promise1.then((res)=>{
//     console.log("promise1",res);
// })
// .catch ((error)=>{  
//     console.log("error",error);
// });



// promises all return the status but as it encounter rejection it terminated
// const p1 = Promise.resolve("success");
// const  p2 = Promise.reject("rejected");

// Promise.all([p1, p2]).then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{ 
//     console.log("error",error);
// })



// promises allsettled return a array of object with its status and value weather it is resolved or rejected

// const p1 = Promise.resolve("success");
// const  p2 = Promise.reject("rejected");

// Promise.allSettled([p1, p2]).then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{ 
//     console.log("error",error);
// })


// Promise.race() Method resolves or rejects as soon as the first promise settles.
// const p1 = Promise.resolve("success");
// const  p2 = Promise.reject("rejected");

// Promise.race([p1, p2]).then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{ 
//     console.log("error",error);
// })


//Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError

// const p1 = Promise.reject("success");
// const  p2 = Promise.resolve("rejected");
// const p3 = Promise.reject("success");

// Promise.any([p1, p2]).then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{ 
//     console.log("error",error);
// })



// Summary of promises
// Method	             Description
// Promise.resolve()	 Instantly resolves a promise.
// Promise.reject()	     Instantly rejects a promise.
// Promise.all()	     Waits for all promises to resolve or one to reject.
// Promise.allSettled()  Waits for all promises to settle (resolve/reject).
// Promise.race()	     Resolves/rejects as soon as the first promise settles.
// Promise.any()	     Resolves with the first fulfilled promise.


let GITHUB_URL  ="https://api.github.com/users/vikasthakurr"
const data = fetch(GITHUB_URL)
data.then((res)=>{
    let data1 = res.json();
})
.then((data))
.catch((error)=>{
    console.log(error);
})
