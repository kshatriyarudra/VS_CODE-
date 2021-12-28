//function prototype of call function in node js, this is the code for behind the call function
Function.prototype.mycall = function(){
    let orgfunt = this
    let orgArr = Array.from(arguments)
    let callofthis = orgArr[0]
    let newparamss = orgArr.slice(1)

    //orgfunt.apply(callofthis,newparamss)//->instead of this we can also use
    callofthis.fun = orgfunt
    callofthis.fun(...newparamss)
    delete callofthis.fun
}

Function.prototype.myapply = function(){
    let orgfunt = this
    let orgArr = Array.from(arguments)
    let callofthis = orgArr[0]
    let newparamss = orgArr[1] //this is bcoz from index 1 array will start so all parameters are into this array

    //orgfunt.apply(callofthis,newparamss)//->instead of this we can also use
    callofthis.fun = orgfunt
    callofthis.fun(...newparamss)
    delete callofthis.fun
}

//function prototype of bind function in node js this is the code for behind the bind function
Function.prototype.mybind = function(){
    let orgfun = this
    let argArray = Array.from(arguments)
    let newThis = argArray[0]
    let newParams = argArray.slice(1)

    let myFun = function(){
        let moreParams = Array.from(arguments)
        let totalParams = newParams.concat(moreParams)

        orgfun.apply(newThis,totalParams)
    } 
    return myFun
}

let obj = {
    fun1: function(name,sname){
        console.log("Hello this is "+this.fullname)
        console.log("Say  hello to "+name+","+sname)
    },
    fullname:"Rudra"
}
//obj.fun1()// It will show undefined undefined
//obj.fun1("Shiva","Adnan")//it will printed the desired output


//call is a function which is available for all function
//this is function call it will show output as->arguments(object) which are passed into this i.e updated
//method1
//obj.fun1.call({
    //fullname:"Himanshu"
//},"Kharbu","Baby")

//first create an object and passed into this and same output will be shown on to the console
//method2
let newobj = {
    fullname:"Himanshu"
}
//obj.fun1.call(newobj,"Kharbu","Baby")//->this is in built function for call
//obj.fun1.mycall(newobj,"Kharbu","Baby")

//apply is similar to the call but it just pass array as an arguments
//obj.fun1.apply(newobj,["Kharbu","Baby","Shubbu"])
obj.fun1.myapply(newobj,["Kharbu","Baby","Shubbu"])

//bind is dis-similar to call.it doesn't make a call it gives us new function to call
//obj.fun1.bind(newobj,["Kharbu","Baby","Shubbu"])->this will not call output will nothing show

//but when we stored into any another variable(let) then output will show
//let boundArr = obj.fun1.mybind(newobj,["Kharbu","Baby","Shubbu"])
//boundArr("Parshu")//but for the third argument it will show undefined.
