// parallel callback is independent of each other
const fs=require('fs')

// //Synchronuous way of reading files(It means when err occured then it have to solve in mid of execution).
// console.log("Before")
// let data=fs.readFileSync("f1.txt")
// console.log(""+data)
// console.log("After")

//Asynchronuous way of reading files(It means all err will solve at the last first all execution takes place).
console.log("Before")

//if I run this program for first time then output is:
// Before
// After
// I am Vivek Varshney
// I am Rudra Pratap Singh

// for second time output is:
// Before
// After
// I am Rudra Pratap Singh
// I am Vivek Varshney

// these all difference is because of event loop which is used as guard i.e. check the stack is empty or not if empty then cb function will call.

fs.readFile("f1.txt",cb1)

fs.readFile("f2.txt",cb2)

function cb1(err,data){
    if(err){
        console.log(err)
    }
    console.log(""+data)
}

function cb2(err,data) {
    if(err){
        console.log(err)
    }
    else{
        console.log(""+data)
    }
}
console.log("After")