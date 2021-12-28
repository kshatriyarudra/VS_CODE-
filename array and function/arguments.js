function sayHi(arg1,arg2){
    console.log(arg1+" "+arg2)
}
sayHi()
sayHi("Hello")//second argument is show as undefined
sayHi("Hello","Ravi")//This will fit into this
sayHi("Hello","Ravi","Good!")//function sayHi will take just two arguments

//below function will change the address of above fun from stack i.e stack will pointing to the new address
//so all the above callings will run the below function because of function declaration(C:\pep web\array and function\Sumit mallik\fundecl.js)
function sayHi(arg1,arg2){
    console.log(arguments)
    console.log(arg1,arg2)
}

sayHi()
sayHi("Bye")//second argument is show as undefined
sayHi("Bye","Ravi")//This will fit into this
sayHi("Bye","Ravi","Good!")//function sayHi will take just two arguments

