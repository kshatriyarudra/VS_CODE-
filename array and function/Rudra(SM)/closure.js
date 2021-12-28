function sq(obj){
    if (typeof obj.exp !='number'){
        console.log("exp must be a number")
        return null
    }
    let squ = function(base){
        let rv = Math.pow(base,obj.exp)
        return rv
    }
    return squ
}

let obj = {
    exp:2
}

//this is for square 
let squarer = sq(obj)
let valuee = squarer(8)
console.log(valuee)

//this is for cube by no changing in sq function
obj.exp=3//this will change the obj value of exp to 3 from 2
let cuber = sq(obj)
let value = squarer(8)
console.log(value)