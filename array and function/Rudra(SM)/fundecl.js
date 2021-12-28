//example-1
//function declaration
//function will declared into the heap first then code will execute by line
fun()
function fun(){
    gun()
}
function gun(){
    console.log("I am inside gun")
}

//example2
function f(){
    console.log(arguments)
}

function f(a,b){
    console.log(a+b)
}

function f(a,b,c,d){
    console.log(a+b+c+d)
}

f(1,2,3,4)//This will run the function which is at last because stack point to the last function
//due to the function declaration