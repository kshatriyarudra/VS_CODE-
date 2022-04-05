(function(){

    // query selector-An element interface method that enables us to search and return the first element within the document.
    let saveAlbum = document.querySelector("#saveAlbum");
    let addAlbum = document.querySelector("#addAlbum");
    let deleteAlbum = document.querySelector("#deleteAlbum");
    let importAlbum = document.querySelector("#importAlbum");
    let exportAlbum = document.querySelector("#exportAlbum");
    let playAlbum = document.querySelector("#playAlbum");
    let selectAlbum = document.querySelector("#selectAlbum");
    let allTemplates = document.querySelector("#allTemplates");
    let playOverlay = document.querySelector("#play-overlay");
    let overlay = document.querySelector("#overlay");
    let contentDetailsOverlay = document.querySelector("#content-details-overlay");
    let newSlide = document.querySelector("#new-slide");
    let createSlide = document.querySelector("#create-slide");
    let showSlide = document.querySelector("#show-slide");
    let btnSaveSlide = document.querySelector("#btnSaveSlide");
    let txtSlideImage = document.querySelector("#txtSlideImage");
    let txtSlideTitle = document.querySelector("#txtSlideTitle");
    let slideList = document.querySelector("#slide-list");
    let txtSlideDesc = document.querySelector("#txtSlideDesc");
    let uploadFile = document.querySelector("#uploadFile");

    let albums = [];
    // An event listener is a JavaScript's procedure that waits for the occurrence of an event.
    addAlbum.addEventListener("click", handleAddAlbum);
    selectAlbum.addEventListener("change", handleSelectAlbum);
    newSlide.addEventListener("click", handleNewSlideClick);
    btnSaveSlide.addEventListener("click", handleSaveSlide);
    saveAlbum.addEventListener("click", saveToLocalStorage);
    deleteAlbum.addEventListener("click", handleDeleteAlbum);
    exportAlbum.addEventListener("click", handleExportAlbum);
    importAlbum.addEventListener("click", function(){
        uploadFile.click();
    });

    uploadFile.addEventListener("change", handleImportAlbum);
    playAlbum.addEventListener("click", handlePlayAlbum);

    function handlePlayAlbum(){
        if(selectAlbum.value == "-1"){
            alert("Select an album to play");
            return;
        }
        // averlay means the area of screen which should be not taken for any action 
        // The innerHTML property can be used to write the dynamic html on the html document. 
        playOverlay.style.display = "block";
        playOverlay.querySelector("#text").innerHTML = "Playing Album..";

        // searching for the selected album into list of album.
        let album = albums.find(a => a.name == selectAlbum.value);
        let i = 0;
        // setting the interval for playing the slides in the slide section area.
        let id = setInterval(function(){
            if(i < album.slides.length){
                // clicking to the children means slides from slide list.
                slideList.children[i].click();
                playOverlay.querySelector("#text").innerHTML = "Showing slide " + (i + 1);
                i++;
            } else if(i == album.slides.length){
                // clear the interval when it should be reached to the last slide
                clearInterval(id);
                // off the overlay
                playOverlay.style.display = "none";
            }         
        }, 1000);
    }

    function handleAddAlbum(){
        let albumName = prompt("Enter a name for the new album");
        if(albumName == null){
            return;
        }
        // trim is for space
        albumName = albumName.trim();
        if(!albumName){
            alert("Empty name not allowed");
            return;
        }

        // checking for the album name is already exists or not.
        let exists = albums.some(a => a.name == albumName);
        if(exists){
            alert(albumName + " already exists. Please use a unique new name");
            return;
        }

        // initialize album as object in number of slides present as an array and name of the album
        let album = {
            name: albumName,
            slides: []
        };
        albums.push(album);
        // selecting the template from the index.html and create node for it.
        let optionTemplate = allTemplates.content.querySelector("[purpose=new-album]");
        let newAlbumOption = document.importNode(optionTemplate, true);

        // The setAttribute() method is used to set or add an attribute to a particular element and provides a value to it. 
        // If the attribute already exists, it only set or changes the value of the attribute. So, we can also use the setAttribute() method to update the existing attribute's value.
        newAlbumOption.setAttribute("value", albumName);
        newAlbumOption.innerHTML = albumName;
        // append the new album 
        selectAlbum.appendChild(newAlbumOption);

        selectAlbum.value = albumName;
        // dispatchEvent () is the last step of the create-init-dispatch process, which is used for dispatching events into the implementation’s event model.
        selectAlbum.dispatchEvent(new Event("change"));
    }

    function handleSelectAlbum(){
        if(this.value == "-1"){
            // settiing all the overlay
            overlay.style.display = "block";
            contentDetailsOverlay.style.display = "none";
            createSlide.style.display = "none";
            showSlide.style.display = "none";

            slideList.innerHTML = "";
        } else {
            // else off the overlay of whole screen bbut keep left the area of slide
            overlay.style.display = "none";
            contentDetailsOverlay.style.display = "block";
            createSlide.style.display = "none";
            showSlide.style.display = "none";

            // finding the album which should be selected
            let album = albums.find(a => a.name == selectAlbum.value);
            slideList.innerHTML = "";

            // for showing all the slides with description and title let's use for loop.
            for(let i = 0; i < album.slides.length; i++){
                let slideTemplate = allTemplates.content.querySelector(".slide");
                
                // import node is true so that we will be able to see all the slide if this will set to false then none of slide is visible.
                let slide = document.importNode(slideTemplate, true);

                // and then fitting all the values into particular section.
                slide.querySelector(".title").innerHTML = album.slides[i].title;
                slide.querySelector(".desc").innerHTML = album.slides[i].desc;
                slide.querySelector("img").setAttribute("src", album.slides[i].url);

                // after this setting event listener such that we will view those slide on which we clicked and then continue appending.
                slide.addEventListener("click", handleSlideClick);

                album.slides[i].selected = false;

                slideList.append(slide);
            }
        }


    }

    function handleDeleteAlbum(){
        // if selected album is empty then
        if(selectAlbum.value == "-1"){
            alert("Select an album to delete");
            return;
        }

        // when click event is called for the delete album then it should search into the album, which one should be deleted.
        let aidx = albums.findIndex(a => a.name == selectAlbum.value);
        // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
        albums.splice(aidx, 1);

        selectAlbum.remove(selectAlbum.selectedIndex);

        selectAlbum.value = "-1";
        selectAlbum.dispatchEvent(new Event("change"));
    }

    function handleExportAlbum(){
        // checking for album is selected to download or not.
        if(selectAlbum.value == "-1"){
            alert("Select an album to export");
            return;
        }

        // finding the album which one is selected.
        let album = albums.find(a => a.name == selectAlbum.value);
        // we have to stringify then after encoded by using encodeURIComponent so that all are able to read as a program.
        let ajson = JSON.stringify(album);
        let encodedJson = encodeURIComponent(ajson);

        // coping the download format from the internet The document.createElement() is used to dynamically create an HTML element node with the specified name via JavaScript. 
        // This method takes the name of the element as the parameter and creates that element node.
        let a = document.createElement("a");
        a.setAttribute("download", album.name + ".json");
        a.setAttribute("href", "data:text/json; charset=utf-8, " + encodedJson);

        a.click();
    }

    function handleImportAlbum(){
        if(selectAlbum.value == "-1"){
            alert("Select an album to import data");
            return;
        }

        // coping this code from internet and then modify by you needs.
        let file = window.event.target.files[0]; 
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            let data = window.event.target.result;
            let importedAlbum = JSON.parse(data);
            
            // after converting into program then find selected album.
            let album = albums.find(a => a.name == selectAlbum.value);
            // concatenate to the parent album. 
            album.slides = album.slides.concat(importedAlbum.slides);

            // After reading of program put all values to the correct place for all slides by using for loop.
            slideList.innerHTML = "";
            for(let i = 0; i < album.slides.length; i++){
                let slideTemplate = allTemplates.content.querySelector(".slide");
                let slide = document.importNode(slideTemplate, true);

                slide.querySelector(".title").innerHTML = album.slides[i].title;
                slide.querySelector(".desc").innerHTML = album.slides[i].desc;
                slide.querySelector("img").setAttribute("src", album.slides[i].url);
                slide.addEventListener("click", handleSlideClick);

                album.slides[i].selected = false;

                slideList.append(slide);
            }
        });

        reader.readAsText(file);
    }

    function handleNewSlideClick(){
        // fitting the overlay by our need when click on to the new slide.
        overlay.style.display = "none";
        contentDetailsOverlay.style.display = "none";
        createSlide.style.display = "block";
        showSlide.style.display = "none";

        // initially all values should be null.
        txtSlideImage.value = "";
        txtSlideTitle.value = "";
        txtSlideDesc.value = "";

        btnSaveSlide.setAttribute("purpose", "create");
    }

    function handleSaveSlide(){
        let url = txtSlideImage.value;
        let title = txtSlideTitle.value;
        let desc = txtSlideDesc.value;

        if(this.getAttribute("purpose") == "create"){
            // selecting the correct template if first slide should be added
            let slideTemplate = allTemplates.content.querySelector(".slide");
            let slide = document.importNode(slideTemplate, true);

            slide.querySelector(".title").innerHTML = title;
            slide.querySelector(".desc").innerHTML = desc;
            slide.querySelector("img").setAttribute("src", url);
            slide.addEventListener("click", handleSlideClick);

            slideList.append(slide);

            let album = albums.find(a => a.name == selectAlbum.value);
            album.slides.push({
                title: title,
                url: url,
                desc: desc
            });

            slide.dispatchEvent(new Event("click"));
        } else {
            let album = albums.find(a => a.name == selectAlbum.value);
            let slideToUpdate = album.slides.find(s => s.selected == true);

            let slideDivToUpdate;
            // finding the slide which one is needed to update
            for(let i = 0; i < slideList.children.length; i++){
                let slideDiv = slideList.children[i];
                if(slideDiv.querySelector(".title").innerHTML == slideToUpdate.title){
                    slideDivToUpdate = slideDiv;
                    break;
                }
            }
            // putting all the data to correct place 
            slideDivToUpdate.querySelector(".title").innerHTML = title;
            slideDivToUpdate.querySelector(".desc").innerHTML = desc;
            slideDivToUpdate.querySelector("img").setAttribute("src", url);

            slideToUpdate.url = url;
            slideToUpdate.title = title;
            slideToUpdate.desc = desc;

            slideDivToUpdate.dispatchEvent(new Event("click"));
        }
    }


    function handleSlideClick(){
        // fitting the overlay by our needs.
        overlay.style.display = "none";
        contentDetailsOverlay.style.display = "none";
        createSlide.style.display = "none";
        showSlide.style.display = "block";

        showSlide.innerHTML = "";

        // showing all the sections for a particular slide.
        let slideInViewTemplate = allTemplates.content.querySelector(".slide-in-view");
        let slideInView = document.importNode(slideInViewTemplate, true);

        slideInView.querySelector(".title").innerHTML = this.querySelector(".title").innerHTML;
        slideInView.querySelector(".desc").innerHTML = this.querySelector(".desc").innerHTML;
        slideInView.querySelector("img").setAttribute("src", this.querySelector("img").getAttribute("src"));
        // two more functions are available as delete and edit.
        slideInView.querySelector("[purpose=edit]").addEventListener("click", handleEditSlideClick);
        slideInView.querySelector("[purpose=delete]").addEventListener("click", handleDeleteSlideClick);

        showSlide.append(slideInView);

        let album = albums.find(a => a.name == selectAlbum.value);
        for(let i = 0; i < album.slides.length; i++){
            if(album.slides[i].title == this.querySelector(".title").innerHTML){
                album.slides[i].selected = true;
            } else {
                album.slides[i].selected = false;
            }
        }
    }

    function handleEditSlideClick(){
        // fitting an overlay
        overlay.style.display = "none";
        contentDetailsOverlay.style.display = "none";
        createSlide.style.display = "block";
        showSlide.style.display = "none";

        // finding the slide which one to be edited.
        let album = albums.find(a => a.name == selectAlbum.value);
        let slide = album.slides.find(s => s.selected == true);

        // puttiing the new value into this.
        txtSlideImage.value = slide.url;
        txtSlideTitle.value = slide.title;
        txtSlideDesc.value = slide.desc;

        btnSaveSlide.setAttribute("purpose", "update");
    }

    function handleDeleteSlideClick(){
        // finding the slide which one should be deleted.
        let album = albums.find(a => a.name == selectAlbum.value);
        let sidx = album.slides.findIndex(s => s.selected == true);

        // searching that slide into the slide list and get that value.
        let slideDivTBD;
        for(let i = 0; i < slideList.children.length; i++){
            let slideDiv = slideList.children[i];
            if(slideDiv.querySelector(".title").innerHTML == album.slides[sidx].title){
                slideDivTBD = slideDiv;
                break;
            }
        }

        // remove the selected slide 
        slideList.removeChild(slideDivTBD);

        album.slides.splice(sidx, 1);

        // fitting an overlay
        overlay.style.display = "none";
        contentDetailsOverlay.style.display = "block";
        createSlide.style.display = "none";
        showSlide.style.display = "none";
    }

    function saveToLocalStorage(){
        // used to convert json to a json string which can be saved to local storage
        let json = JSON.stringify(albums); 
        localStorage.setItem("data", json);
    }

    function loadFromLocalStorage(){
        // grtting the json file from local storage.
        let json = localStorage.getItem("data");
        if(!json){
            return;
        }
        // When receiving data from a web server, the data is always a string.
        // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        albums = JSON.parse(json);
        for(let i = 0; i < albums.length; i++){
            let optionTemplate = allTemplates.content.querySelector("[purpose=new-album]");
            let newAlbumOption = document.importNode(optionTemplate, true);
    
            newAlbumOption.setAttribute("value", albums[i].name);
            newAlbumOption.innerHTML = albums[i].name;
            selectAlbum.appendChild(newAlbumOption);
        }

        selectAlbum.value = "-1";
    }

    loadFromLocalStorage();
})();