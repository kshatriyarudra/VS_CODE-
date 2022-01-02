//I am going to use in built module like as file system(fs) and path module.

//node js treats command line input as array and that array is our required array.
//let input = process.argv[2]
//console.log(input)

//Slice is used to extract the commands path that we have pass.
//It will output in the form array.

const helpObj = require('./Components/help')

const treeObje = require('./Components/tree')

const organiseObje = require('./Components/organise')

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
        treeObje.treeFnKey(inputArr[1])
        break
    case 'organise':
        organiseObje.organiseFnKey(inputArr[1])
        break
    case 'help':
        helpObj.helpFnKey()
        break
    default:
    console.log('Please ENTER a valid command!')
    break
}