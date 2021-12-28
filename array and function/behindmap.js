//suppose I have an array
a=[2,4,7,12,56]

function square(num){
    return num*num
}

function allSquare(arr){
    newA = []
    for(let i=0;i<a.length;i++){  //This for is used as only map function which will do our work easy
        let sq = square(a[i])
        newA.push(sq)
    }
    return newA
}
let ans = allSquare(a)
console.log(ans)