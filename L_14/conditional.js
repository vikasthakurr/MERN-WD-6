// if condition

//  if (age>=18){
//     console.log("can vote");
//  }

// if else condition

//  if (age>=18){
//     console.log("can vote");
//  }
//  else{
//     console.log("can't vote");
//  }

//  else if ladder
// let age =25;

// if(age==18){
//     console.log("can vote but your are still a teen");
// }
// else if (age >18){
//     console.log("can vote and your are adult");
// }
// else{
//     console.log("can't vote ");
// }
// let age = 19;

// console.log(age > 18 ? "can vote" : "can't vote"); // ternary operator


// switch case
const prompt=require("prompt-sync")();
let day = prompt ("enter day");


 switch(day){
    case "sunday":
        console.log("7:45");

        break;

    case  "monday":
        console.log("7:55");
    break;

    case  "tuesday":
        console.log("8:05");
    break;

    default:
        console.log(" invalid day");

 }