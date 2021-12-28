//map
let array = [1,2,3,4]
function square(num){
    return num*num
}
function cube(num){
    return num*num*num
}
let new1 = array.map(square)
//console.log(new1)

//filter
function isEven(num){
    if(num%2==0){
        return true
    }
    return false
}
let new2 = array.filter(isEven)
//console.log(new2)

//includes
a1 = [1,4,6,2]
a2 = [1,3,2,6]
for(let i=0;i<a2.length;i++){
    ele = a2[i]
    let ispres = a1.includes(ele)
    if(ispres==false){
        a1.push(ele)
    }
}
//console.log(a1)
//indexOf
//console.log(a1.indexOf(2))

//quesion remove all primes
a3 = [9,5,12,19,13]

function isPrime(num){
    let ispr = true
    for(let i=2;i<num-1;i++){
        if(num%i==0){
            ispr = false
            break
        }
    }
    return ispr
}
for(let i=a3.length-1;i>=0;i--){
    if(isPrime(a3[i])==true){
        a3.splice(i,1)
    }
}
//console.log(a3)

////////////////example-double income if <100
let member = [{g:"m",ages:20,income:50},
{g:"f",ages:25,income:100},
{g:"f",ages:30,income:250},
{g:"m",ages:20,income:70}]

function small(elem){
    if(elem.income<100){
        elem.income*=2
    }
    return elem
}
let arrayans = member.map(small)
console.log(arrayans)
