// function fun(){
//     //a = 10 or
//     this.a = 10//in both the cases output will be same but if u let a like below then it will show error
//     //let a=10
//     //console.log(a)
// }
// fun()//output will be 10 from here
//console.log(a) // and also 10 fromm here 
//both will be 10 bcoz when this.a execute then it will make another address(global/window) in heap
//in which fun will give output as well outer console will search in the heap address and show the same.

let b=100
let c=200
let d=300

function fun1(){
    console.log(this.b+" "+this.c+" "+this.d)
}

let obj = {
    b:10,
    c:20,
    d:30,
    fun2:function(){
        console.log(this.b+" "+this.c+" "+this.d)
    },
    fun3:fun1,
    fun4:()=>{ //this is known as arrow function please don't use this, arguments,call,bind and apply it is undefined
        //and also not use as constructor only use as map, filter etc.
        console.log(this.b+" "+this.c+" "+this.d)
    }
}

let o2 = {
    b:1000,
    c:2000,
    d:3000
}
obj.fun2()
fun1()
obj.fun3()
obj.fun4()

obj.fun2.call(o2)
fun1.call(o2)
obj.fun3.call(o2)
obj.fun4.call(o2)


