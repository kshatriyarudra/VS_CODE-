//function expression is hoist because fun expression will allocated when line of code will came
//In other word it will execute lin by line
//fun() output-fun is not a function because at this line fun is not declared in
//here fun is not a function

var fun = function(){
    gun()
}
//here gun is not a function
//fun() output-gun is not a function because at this line gun is not declared in

var gun = function(){
    console.log("I am inside gun")
}
//it will gives the correct output
//fun()


