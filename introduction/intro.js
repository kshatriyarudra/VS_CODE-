let str='Rudra'
//console.log(str.length)
//console.log(str.slice(2,4))
//console.log(str.substr(2,2))
let sayHello=str.replace('Rudra','Hello Rudra')
//console.log(sayHello)
//console.log(sayHello.toUpperCase())
//console.log(sayHello.toLowerCase())
//function add(a,b){
//    return a+b
//}
//let sum=add(3,2)
//console.log(sum)
//let sayHi=function(a){
//    console.log(a)
//}
//sayHi(20)

// let add=(function(a,b){
//     console.log(a+b)
// })(10,10)
let cap={
    firstName:'Steve',
    lastName:'Rogers',
    friends:['Bucky','Tony Stark','Br Banner'],
    age:150,
    address:{
        State:'Uttar Pradesh',
        City:'Lucknow',
    },
    sayHi:function fn(){
        console.log('Cap says Hi')
    }
}
//console.log(cap)
//console.log(cap.address)
cap.sayHi()