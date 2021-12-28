Array.prototype.sayHi = function(){
console.log("Hello")
}
//this is predefined keyword that refers to the entity which calling to the function.
Array.prototype.sum = function(){
    s=0
    for(let i=0;i<this.length;i++){
        s+=this[i]
    }
    console.log(s)
}

Array.prototype.product = function(){
    p=1
    for(let i=0;i<this.length;i++){
        p*=this[i]
    }
    console.log(p)
}

Array.prototype.indexOff = function(elem){
for(let i = 0;i<this.length;i++){
    if(this[i]==elem){
        console.log(i)
        break
    }
}
}

a1=[1,2]
a2=[2,3]
a1.sum()
a2.product()
a1.indexOff(2)
