// function sayHi(name, cb){
//     console.log(`Hello ${name}`);
//     cb();
// }

// function sayBye(){
//     console.log('Good Bye');
// }

// sayHi("abhiram", sayBye);

step1 = (cb) => {
  console.log("step1");
  cb();
};

step2 = (cb) => {
  console.log("step2");
  cb();
};

step3 = (cb) => {
  console.log("step3");
  cb();
};

try {
  step1(() => {
    try {
      step2(() => {
        try {
          step3(() => {
            console.log("done");
          });
        } catch (error) {
          console.error("Error in step3:", error);
        }
      });
    } catch (error) {
      console.error("Error in step2:", error);
    }
  });
} catch (error) {
  console.error("Error in step1:", error);
}



