// serial are dependent to each other

const fs = require('fs')
//Asynchronuous way of reading files(It means all err will solve at the last first all execution takes place).
console.log("Before")

//if I run this program for first time then output is:
// Before
// After
// I am Vivek Varshney
// I am Rudra Pratap Singh

fs.readFile("f1.txt",cb1)


function cb1(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(""+data)
        fs.readFile("f2.txt",cb2)
    }
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