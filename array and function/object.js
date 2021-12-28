members = [{g:'m',ages:29,income:250},
{g:'f',ages:20,income:200},
{g:'f',ages:22,income:100},
{g:'f',ages:25,income:20}]

function chotu(elem){
    let copy = {...elem}//copy the elements method1
    //method2
    //copy={}
    //for(let key in elem){
    //   copy[key]=elem[key]
    //}
    if(copy.income<200){
        copy.income=copy.income*2
    }
    return copy
}
console.log(members)
console.log(members.map(chotu))
