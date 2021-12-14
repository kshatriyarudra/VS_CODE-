//any function that is passed as an argument to another function.
function printName(name,cb){
    console.log(name)
    cb("Singh")
}

function printLastName(name){
    console.log(name)
}
printName("Rudra", printLastName)


const fs=require('fs')

//Synchronuous way of reading files(It means when err occured then it have to solve in mid of execution).
console.log("Before")
let data=fs.readFileSync("f1.txt")
console.log(""+data)
console.log("After")

//Asynchronuous way of reading files(It means all err will solve at the last first all execution takes place).
console.log("Before")
fs.readFile("f1.txt",cb)
function cb(err,data){
    if(err){
        console.log(err)
    }
    console.log(""+data)
}
console.log("After")