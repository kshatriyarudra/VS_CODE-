//Example1->write code for showing left seconds (inspect->console) on web server by immediately invoked function execution
(function(){
    //prompt is used to take input at web page
    let timeU = prompt("How much to count ")
    let timeint = prompt("After time interval ")
    //calls the callHandle function after every seconds (miliseconds*1000)
    //and stored this in id for delete when we don't need this using clearInterval
    let iid = setInterval(callHandle,timeU*1000)
    //it will store the starting value of timeU
    let orgTu = timeU

    function callHandle(){
        console.log(timeU+" Left")
        timeU-=timeint
        if(timeU==0){
            //for clearing the setInterval function
            clearInterval(iid)
            //This will show the alert message when we call
            alert(orgTu+ " Finished")
        }
    }
})()