class Book{
    constructor(title, author, pages, read=false)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    getTitle(){
        return title;
    }
}

class Library{
    constructor(){
        this.library = [];
    }

    addBookToLibraryP(title, author, pages){
        let sneed = new Book(title, author, pages);
        this.library.push(sneed);
        closeForm();
        this.printLibrary();
    }

    printLibrary(){
        clearMain();
        for (let i = 0; i < this.library.length; i++){
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
                this.library[ind].read = !(this.library[ind].read);
                readP.textContent = `Read Status: ${this.library[ind].read}`;
            });
    
            titP.textContent = `Title: ${this.library[i].title}`;
            authP.textContent = `Author: ${this.library[i].author}`;
            pagesP.textContent = `Number of Pages: ${this.library[i].pages}`;
            readP.textContent = `Read Status: ${this.library[i].read}`;
    
            card.appendChild(titP);
            card.appendChild(authP);
            card.appendChild(pagesP);
            card.appendChild(readP);
            card.appendChild(closeBtn);
            card.appendChild(readBtn);
            
            document.getElementsByClassName("main")[0].appendChild(card);
        }
    }
}

function newEntry(title, author, pages){
    myLibrary.addBookToLibraryP(title, author, pages)
}

function clearMain(){
    let mainSect = document.getElementsByClassName("main")[0];

    while (mainSect.hasChildNodes()) {
        mainSect.removeChild(mainSect.firstChild);
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
    myLibrary.addBookToLibraryP('The First Book', 'Jerry Terry', '99');
    myLibrary.addBookToLibraryP('Book: The Second', 'Larry Barry', '199');
    myLibrary.addBookToLibraryP('Book III', 'Jean Sean', '299');
    myLibrary.addBookToLibraryP('Book - The Fourth', 'John Con', '399');
    myLibrary.addBookToLibraryP('Book', 'Titi Fritit', '499');
    myLibrary.printLibrary();
}

const myLibrary = new Library();
game()