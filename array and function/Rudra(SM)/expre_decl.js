//mixture of function expression and declaration
fun()
//function expression
function fun(){
    gun()
}

//fun() output-will be same as above fun calling beacause gun is not allocated at this line in heap
// that is because of fun declaration 
//function declaration
var gun = function(){
    console.log("I am inside a gun")
}
//output-gun is not a function