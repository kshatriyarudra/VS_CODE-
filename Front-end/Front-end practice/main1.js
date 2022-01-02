//In this main function I am going to resolve few issues like as making function for each steps
(function(){
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");

    let fid = 0; //this is for folder id which is used while storing data
    let folders = [];//this is folder array in which data will store

    //ading an event and passing addfolder function, it will execute when we clicked to the button
    btnAddFolder.addEventListener("click", addFolder);

    //this is a function for adding folder
    function addFolder(){
        let fname = prompt("Folder name?");//taking a folder name as string
        if(!fname){
            return;//if u will not typiing anything to this fname prompt then simply return
        }

        fid++;//else increase the folder id 
        addFolderInPage(fname, fid);//this is a function for adding folder name with  its unique id to the front page

        folders.push({//in the folders array. I am going to add fid and fname.
            id: fid,
            name: fname
        });
        persistFoldersToStorage();//it will store the data to local storage
    }
    
    //this is a function for deleting a folder
    function deleteFolder(){
        let divFolder = this.parentNode;//we have not div folder now so we can take this using 'this.parentNode' 
        let divName = divFolder.querySelector("[purpose='name']");//selecting the purpose i.e. deletion of folder

        let flag = confirm("Do you want to delete the folder " + divName.innerHTML);//it will used for confirmation
        if(flag == true){//if you will click on yes then
            divContainer.removeChild(divFolder);//it will remove the div folder from coontainier
            
            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));//this line is for selecting the index when we want to delete
            folders.splice(idx, 1);//then it have to delete the id at whhich we will click  using splice
            persistFoldersToStorage();//again storing the data to local storage
        }
    }

    function editFolder(){
        let divFolder = this.parentNode;//we have not div folder now so we can take this using 'this.parentNode'
        let divName = divFolder.querySelector("[purpose='name']");////selecting the purpose i.e. edit the folder

        let fname = prompt("Enter the new folder name");//passing new name to the folder name
        if(!fname){//if you will not type something then simply return
            return;
        }

        divName.innerHTML = fname;//else shhow the new divName as fname

        let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("fid")));//selecting the folder, which we want to edit
        folder.name = fname;//then edit the folder name
        persistFoldersToStorage();//and then store the data to local storage 
    }

    function addFolderInPage(fname, fid){
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");//taking the folder (templete)
        let divFolder = document.importNode(divFolderTemplate, true);//all the content of folder will be imported trully(copied)

        let divName = divFolder.querySelector("[purpose='name']");//selecting the div name for showing to the front
        divName.innerHTML = fname;//show to the front
        divFolder.setAttribute("fid", fid);//setting the attribute for editing and deleting purpose

        let spanDelete = divFolder.querySelector("span[action='delete']");//if you will click on to the delete then delete action will be taken
        spanDelete.addEventListener("click", deleteFolder);//adding an event for deleting by passing deletefolder function

        let spanEdit = divFolder.querySelector("span[action='edit']");//if you will click on to the edit then edit action will be taken
        spanEdit.addEventListener("click", editFolder);//adding an event for editing by passing editfolder as a function

        divContainer.appendChild(divFolder);//append the div folder to the prev child
    }

    //this is a function for storing the data to the json file using local storage of google 
    function persistFoldersToStorage(){
        console.log(folders);//checking for folders at console
        let fjson = JSON.stringify(folders);//folders are stored as string so we have to strinigify this
        localStorage.setItem("data", fjson);//this will set the data to json file 
    }

    //this function is for taking data from the json file i.e from local storage
    function loadFoldersFromStorage(){
        let fjson = localStorage.getItem("data");//taking item from storage 
        if(!!fjson){//this will check if json data is empty or not if not then
            folders = JSON.parse(fjson);//taking the folders from the json fil using parse
            folders.forEach(function(f){//this will basically traverse the folder using for each 
                addFolderInPage(f.name, f.id);//passing the folder name and folder id to the addfolderinpage which will show.
            })
        }
    }

    //this function is used always when you want to refresh the page then it will take out the data from local storage
    loadFoldersFromStorage();
})();