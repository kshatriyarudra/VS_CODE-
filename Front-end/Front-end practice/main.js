(function(){
    //# is used to select id from index.html 
    let btn = document.querySelector("#myfirstbutton")  
    //h1 will take the heading(h1) from index.html 
    let h1 = document.querySelector("h1")

    //when you will click on the button then color of h1 will change to green
    btn.addEventListener("click",function(){
        h1.style.color="green"
    })
    //when your mouse will go to the area of button then it will change the color to pink until mouse is on button
    btn.addEventListener("mouseover",function(){
        h1.style.color="pink"
    })
    //when your mouse will go out of the area of button then the color of h1 will change to black
    btn.addEventListener("mouseout",function(){
        h1.style.color="black"
    })
})()