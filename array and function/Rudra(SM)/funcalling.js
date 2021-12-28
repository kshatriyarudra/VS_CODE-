function arg(a,b){
    console.log(a+" "+b)
    console.log(arguments)//This will like as an array 
    let arr = Array.from(arguments)//How it will make as an array
    console.log(arr)//this will print ann array
    let res = arr.map(x=>x*x)//map will traverse whole arr and put in another arr with square
    console.log(res)
}
arg(2,4,12,45,87)