//First activity with node js

//I am going to start project as File System Organizer
//Output of this project is to handling the folder i.e 
//If we have lot of files in a particular folder then it will arrange 
//the files in thier extensions category such that image will arrange in Document(jpg),
//mp4,mp3 file will be in media and so on.

//I am going to use in built module like as file system(fs) and path module.

//node js treats command line input as array and that array is our required array.
//let input = process.argv[2]
//console.log(input)

//Slice is used to extract the commands path that we have pass.
//It will output in the form array.

const fs = require('fs')

const path = require('path')

//slice function will take the array indexing from argument passed into thise slice function.
let inputArr = process.argv.slice(2)
//console.log(inputArr)

//I am going to take the user command which is stored in the inputArray
//indexing starts from zero and first element of the inputArray is our command.
let command = inputArr[0]

//Then after make an object in js which will store the type of file and value as extension file.
let types = {media: ["mp4", "mkv","mp3"],
             archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
             documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex','jpg'],
             app: ['exe', 'dmg', 'pkg', "deb","js"]
            }

//Basically switch function will run according to the command 
//if command not matched with case then it will output default 
switch(command){
    case 'tree':
        treeFn()
        break
    case 'organise':
        organiseFn(inputArr[1])
        break
    case 'help':
        helpFn()
        break
    default:
    console.log('Please ENTER a valid command!')
    break
}

//Function for tree case
function treeFn(){
    console.log('tree implemented ')
}

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
    organiseHelper(dirpath)

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
}

//Function for help case 
function helpFn(){
    console.log(`List of all commands-
                 1)Tree command- node FO.js <dirName>
                 2)Organize- node FO.js <dirName>
                 3)Help- node FO.js help`)
}

