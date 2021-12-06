const fs = require('fs')

const path = require('path')

function treeFn(dirpath){

    //Checking for dirpath
    if(dirpath==undefined){
        Console.log("Please enter a valid path")
    }

    else{

        //If dirpath exists then we continue
        let doesExist = fs.existsSync(dirpath)
        if(doesExist){
            //Making function as treeHelper which will give all the files and folder in order
            //for good view we use indents(any symbol).
            treeHelper(dirpath," ")
        }
    }
}

function treeHelper(dirpath,indent){

    //Checking for dirpath is file or folder
    let isFile = fs.lstatSync(dirpath).isFile()

    //if dirpath is file then output this 
    if(isFile==true){
        let fileName = path.basename(dirpath)
        console.log(indent + "|-" + fileName)
    }
    else{

        //else it is folder then we have to go under this folder i.e child folder
        let dirName = path.basename(dirpath)
        console.log(indent + "'--" + dirName)

        //Let's suppose child folder has children's then reading the dirpath
        let children = fs.readdirSync(dirpath)

        //Going into the children folder and use recursion into this because same steps
        // are needed
        for(let i=0;i<children.length;i++){
            //Taking the childPath
            let childPath = path.join(dirpath, children[i])
               //but arguments are different this time bco we are into the child folder's
               //so indent will be as it's current value.
               treeHelper(childPath,indent+'\t')
        }
    }
}

module.exports = {
    treeFnKey : treeFn
}