//without return

//function->code inside
function sayHi(name){
    console.log("Hello "+name)
}
//calling a function with passing an argument
sayHi("Rudra")

//printing a function name not passing an argument
console.log(sayHi)

//printing a value which will not return anything then it will show undefined
let rVal = sayHi("Rudra")
console.log(rVal)

//if argument is not passed through function then it will again show undefined
sayHi()

//with return
function sayHi(name){
    console.log("Hello "+name)
    return "returned from function"
}
let rrVal = sayHi("Rudra")
console.log(rrVal)
