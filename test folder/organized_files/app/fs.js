const fs=require('fs')
//reading of file
let cont=fs.readFileSync('f1.txt')
console.log("Content of f1 is ->"+cont)
//writing of file
fs.writeFileSync('f1.txt','Hello G!!!')
//append data
fs.appendFileSync('f1.txt','This is F1.')