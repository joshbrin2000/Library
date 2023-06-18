let myLibrary = [];

function Book(title, author, pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title;
    }
}

function addBookToLibraryP(title, author, pages){
    let sneed = new Book(title, author, pages);
    myLibrary.push(sneed);
    printLibrary();
}

function clearMain(){
    let mainSect = document.getElementsByClassName("main")[0];

    while (mainSect.hasChildNodes()) {
        mainSect.removeChild(mainSect.firstChild);
    }
}

function printLibrary(){
    clearMain();
    for (i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.className = 'book-card';
        card.id = 'book-card' + i;
        
        let titP = document.createElement('p');
        let authP = document.createElement('p');
        let pagesP = document.createElement('p');
        let readP = document.createElement('p');

        let closeBtn = document.createElement('button');
        closeBtn.innerHTML = "Delete";
        closeBtn.addEventListener ("click", function() {
            document.getElementsByClassName("main")[0].removeChild(document.getElementById(card.id));
        });

        let readBtn = document.createElement('button');
        readBtn.innerHTML = "Toggle Read Status";
        readBtn.addEventListener ("click", function() {
            let ind = (card.id).match(/\d/g);
            ind = ind.join("");
            myLibrary[ind].read = !(myLibrary[ind].read);
            readP.textContent = `Read Status: ${myLibrary[ind].read}`;
        });

        titP.textContent = `Title: ${myLibrary[i].title}`;
        authP.textContent = `Author: ${myLibrary[i].author}`;
        pagesP.textContent = `Number of Pages: ${myLibrary[i].pages}`;
        readP.textContent = `Read Status: ${myLibrary[i].read}`;

        card.appendChild(titP);
        card.appendChild(authP);
        card.appendChild(pagesP);
        card.appendChild(readP);
        card.appendChild(closeBtn);
        card.appendChild(readBtn);
        
        document.getElementsByClassName("main")[0].appendChild(card);
    }
}

function openForm(){
    document.getElementById("popupBg").style.display = "flex";
    document.getElementById("popupBg").style.justifyContent = "center";
}

function closeForm(){
    document.getElementById("popupBg").style.display = "none";
}

function game(){
    addBookToLibraryP('The First Book', 'Jerry Terry', '99');
    addBookToLibraryP('Book: The Second', 'Larry Barry', '199');
    addBookToLibraryP('Book III', 'Jean Sean', '299');
    addBookToLibraryP('Book - The Fourth', 'John Con', '399');
    addBookToLibraryP('Book', 'Titi Fritit', '499');
    printLibrary();
}

game()