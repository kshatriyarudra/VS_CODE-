(function(){
    //# is used to select id from index.html 
    let btn = document.querySelector("#myfirstbutton")  
    
    //# is used to select id from index.html
    let divcontainer = document.querySelector("#container")

    //# is used to select id from index.html
    let mytemplates = document.querySelector("#mytemplates")

    btn.addEventListener("click",function(){

        //this is for prompt and message
        let fname = prompt("Enter a folder's name")

        //suppose you will be not typing anything into this then simply return
        if(fname==null){
            return
        }

        //taking the templete of folder 
        let divfoldertemplate = mytemplates.content.querySelector(".folder")

        //all the content of folder will be imported trully
        let divfolder = document.importNode(divfoldertemplate,true)

        //select the div name as purpose
        let divname = divfolder.querySelector("[purpose='name']")

        //and put this into the inner html for showing to the icon.
        divname.innerHTML = fname

        //if more then one divfolder will be taken then append this to the division(div) container
        divcontainer.appendChild(divfolder)
    })
    
})()