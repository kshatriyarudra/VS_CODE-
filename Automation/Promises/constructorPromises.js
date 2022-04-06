let myPromise = new Promise(function(resolve,reject){
    const a = 3;
    const b = 3;

    if(a==b){
        resolve('Yes a and b  are equal')
    }else{
        reject('They are not equal')
    }
})

myPromise.then(function(data){
    console.log('This is coming from resolve method '+data)
})

myPromise.catch(function(err){
    console.log('This is coming from reject method '+err)
})