//First activity with node js

//I am going to start project as File System Organizer
//Output of this project is to handling the folder i.e 
//If we have lot of files in a particular folder then it will arrange 
//the files in thier extensions such that image will arrange in jpg,
//text file will in txt and so on.

//I am going to use in built module like as file system(fs) and path module.

//node js treats command line input as array and that array is our required array.
//let input = process.argv[2]
//console.log(input)

//Slice is used to extract the commands path that we have pass.
//It will output in the form array.

const fs = require('fs')

const path = require('path')

let inputArr = process.argv.slice(2)
//console.log(inputArr)

let command = inputArr[0]

let types = {media: ["mp4", "mkv","mp3"],
             archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
             documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex','jpg'],
             app: ['exe', 'dmg', 'pkg', "deb","js"]
            }

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

function treeFn(){
    console.log('tree implemented ')
}

function organiseFn(dirpath){
    let destPath

    if(dirpath==undefined){
        console.log('Please enter valid Directory Path')
        return
    }

    else{
        let doesExist = fs.existsSync(dirpath)
        if(doesExist==true){

            destPath=path.join(dirpath,'organized_files')

            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath)
            }

            else{
                console.log('File already exists')
            }

        }

        else{
            console.log('Please enter a valid path')
        }

    }
    organiseHelper(dirpath)

}

function organiseHelper(src,dest){
    let childNames = fs.readdirSync(src)
    //console.log(childNames)

    for(let i=0;i<childNames.length;i++){

        let childAddress = path.join(src,childNames[i])

        let isFile = fs.lstatSync(childAddress).isFile()

        if(isFile==true){
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i]+' belongs to '+fileCategory)
        }

    }
}

function getCategory(name){
    let ext = path.extname(name)
    //console.log(ext)
    ext=ext.slice(1)

    for(let type in types){

        let ctypeArr = types[type]
        //console.log(ctypeArr)

        for(let i=0;i<ctypeArr.length;i++){
            if(ctypeArr[i]==ext){
                return type
            }
        }
    }
}


function helpFn(){
    console.log(`List of all commands-
                 1)Tree command- node FO.js <dirName>
                 2)Organize- node FO.js <dirName>
                 3)Help- node FO.js help`)
}

