let obj={
    fun1: function(){
        console.log("This is "+this.fullname+" my age is "+this.age)
    },
    fun2: function(){
        console.log("This is "+obj.fullname+" my age is "+obj.age)
    },
    fun3: function(){
        console.log("This is "+fullname+" my age is "+age)
    },

    fullname: "Rudra",
    age: 21
}

obj.fun1()//This will run
obj.fun2()//this will also run
obj.fun3()//It will show an error fullname and age is not defined