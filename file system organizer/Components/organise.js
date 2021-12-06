const fs = require('fs')

const path = require('path')

//function for organise case
function organiseFn(dirpath){
    //This is the path of destination i.e which folder we are looking for arranging
    //in there respective extension file.
    let destPath

    //First check the dirpath defined or not using if/else.
    if(dirpath==undefined){
        console.log('Please enter valid Directory Path')
        return
    }

    else{

        //If dirpath defined then check it is existing or not 
        let doesExist = fs.existsSync(dirpath)

        //if this file exists then
        if(doesExist==true){

            //join destPath with organized_file
            destPath=path.join(dirpath,'organized_files')

            //If destPath doesn't exists then make a directory after this go and check
            //destPath organizes_file will be created automatically.
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath)
            }

            //If file already exists
            else{
                console.log('File already exists')
            }

        }

        else{
            console.log('Please enter a valid path')
        }

    }
    //Here we got the correct destPath
    //After this I am going to write a function which will help in arranging the file
    //with there extension file name
    organiseHelper(dirpath,destPath)

}

//If we want to copy and paste data then we need source and destination folder for this process 
//Similarly we have take data as src and arranging this then after put these into dest.
function organiseHelper(src,dest){
    let childNames = fs.readdirSync(src)
    //console.log(childNames)

    //Run a for loop for traversing into the src folder
    for(let i=0;i<childNames.length;i++){

        //join src file with childNames i.e for checking,it is file or not
        let childAddress = path.join(src,childNames[i])

        //Using isFile function from file system(fs) module
        let isFile = fs.lstatSync(childAddress).isFile()

        //If File exists then
        if(isFile==true){

            //We need to categorize the file respective to there extension
            //from which category it belongs to.
            //For classification we need another function naming as getCategory
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i]+' belongs to '+fileCategory)

            sendFiles(childAddress,dest,fileCategory)
        }

    }
}

//In this defined function I am going to output the file category(extension)
function getCategory(name){

    //Using path module I am taking the extension
    let ext = path.extname(name)
    //console.log(ext)

    //If we take the extension as stored above it means dot('.') includes
    //for removing this, I am going to use slice function and taking all values
    //starting from index passed in it 
    ext=ext.slice(1)

    //For searching in types object we need to use for loop
    for(let type in types){

        //In the loop we have to take the value(ctypeArr) of key(type)
        let ctypeArr = types[type]
        //console.log(ctypeArr)

        //Then use for loop for searching the extension in that value(ctypeArr)
        for(let i=0;i<ctypeArr.length;i++){
            //If found then return key(type)
            if(ctypeArr[i]==ext){
                return type
            }
        }
    }
    return "others"
}

//We found the category but after this we have to make dir category-wise and put all data into these
//in order of category
//we need to copy the Path from srcFile and put this at dest Path according to thier category
function sendFiles(srcFilePath, dest, fileCategory){
    //Going to the dest Path
    let catPath = path.join(dest,fileCategory)

    //It will check category path will exists or not if not then make dir
    if(fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }

    //Storing the basename of srcFilePath
    let fileName = path.basename(srcFilePath)

    //join that into destFilePath
    let destFilePath = path.join(catPath,fileName)

    //Finally copy the data from srcFilePath->destFilePath
    fs.copyFileSync(srcFilePath,destFilePath)

    //After copying we don't want srcFiles so lets detele this using unlink function.
    fs.unlinkSync(srcFilePath)


    console.log(fileName + " Copied to " + fileCategory)
}
module.exports = {
    organiseFnKey : organiseFn
}