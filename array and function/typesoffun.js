//1. function definition
function iamfun(){
    console.log("I am a function")
}
iamfun()
let a = [1,2,3]
let b = a
console.log(b)

//2.function expression
let expression = function iamexp(){
    console.log("I am an expression")
}
expression()

//3.iifee-immediate invoked function expression
//console.log("Before")
//this will run when console is free it means we have to comment all codes except below function
(function drawBoard(){
console.log("Board is immediately drawn")
})()
console.log("After")

//4.Anonymous function->which will not taking name of function
let expressio = function (){
    console.log("I am an expression of anamynous")
}
expressio()