//Global execution context

console.log("Before declaration",a)//output undefined
var a
console.log("After declaration",a)//output undefined
a=10
console.log("After initialization",a)//output 10

//If function will call then new execution context will be created
//var is a function scope
function fn(){
    console.log("Before declaration",a)//output undefined
    var a// If at a place of var is let then it will show an error because it is already decleared
    console.log("After declaration",a)//output undefined
    a=20
    console.log("After initialization",a)
}
fn()