//closure is basically formed first i.e if another function inside a outer function is present 
//then if we call the outer function then it is removed from the stack but all access will be 
//possible for outer function when inner function will call.
function outer(first){
    console.log("I am out side")
    return function inner(second){
        console.log("I am inside")
        return first*second //if you want more function inside function then you will make as many
        
    }
}
let rVal = outer(3)
console.log(rVal)
//when we call rVal() then inner function will run and what is in return then it will store 
//in variable
let fVal = rVal(2)
console.log(fVal)

//example-1
//expectation output-0,1,2
//reality output-3,3,3
console.log("Example-1 Method-1-output")
function out(){
    var a =[]
    for (var i=0;i<3;i++){
        a.push(function (){
        console.log(i)})
    }
    return a
}
var a = out()
a[0]()//output will be 3 in all the cases bcoz when outer loop will terminate then i=3 and
a[1]()//it will be stored in closure so when arr function call then it will go the the 
a[2]()//value of i in the closure(these all phenomenon is closure)

//If we want expected output then there will be few change in above code
console.log("Method-2-output")
function oute(){
    var an = []
    for(var i=0;i<3;i++){
        function oute1(){//in this case first I will store the value of i and then output this
            var j=i
            return function(){
                console.log(j)
            }
        }
        an.push(oute1())
    }
    return an
}

var an = oute()
an[0]()
an[1]()
an[2]()

