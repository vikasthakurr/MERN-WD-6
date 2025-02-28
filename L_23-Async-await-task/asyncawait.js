//normal task using promise chaining.....

// function fetchData(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Name: Vikas, Age:25");
//         },2000);
//     })
// }

// fetchData()
// .then((data)=>{
//     console.log("we are processing the data");
//     return data;
// })
// .then((data)=>{
//     console.log("we have processed the data");
//     return data;
// })
// .then((data)=>{
//     console.log("data is:",data);
//     })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("task completed");
// })

// using async
// await p = "vikas";
// async function getData(){
//     return "Name: Vikas, Age:25";
// }
// const data = getData();
// console.log(data);

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error("Error fetching");
    }

    let data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData();