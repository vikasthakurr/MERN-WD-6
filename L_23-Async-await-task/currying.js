// function sum (a,b,c){
//     return a+b+c;
// }
// console.log(sum(5,6,7));


// // currying function
// function sum (a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(5)(6));



function sendAutoMail(to){
    return function (subject){
        return function (body){
            console.log(`email sent to ${to} with subject ${subject} and body ${body}`);
        }
    }
}

// sendAutoMail("vikas@gmail.com")("important notice");

let step1 = sendAutoMail("vikas@gmail.com");
// let step2 = step1("important notice");
step2("hii this is email");
