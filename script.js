let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function(){
        return title;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function printLibrary(){
    for (i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.className = 'book-card';
        let titP = document.createElement('p');
        let authP = document.createElement('p');
        let pagesP = document.createElement('p');
        titP.textContent = `Title: ${myLibrary[i].title}`;
        authP.textContent += `Author: ${myLibrary[i].author}`;
        pagesP.textContent += `Number of Pages: ${myLibrary[i].pages}`;
        card.appendChild(titP);
        card.appendChild(authP);
        card.appendChild(pagesP);
        document.getElementsByClassName("main")[0].appendChild(card);
    }
}

function game(){
    let a = new Book('The First Book', 'Jerry Terry', '99');
    let b = new Book('Book: The Second', 'Larry Barry', '199');
    let c = new Book('Book III', 'Jean Sean', '299');
    let d = new Book('Book - The Fourth', 'John Con', '399');
    let e = new Book('Book', 'Titi Fritit', '499');
    addBookToLibrary(a);
    addBookToLibrary(b);
    addBookToLibrary(c);
    addBookToLibrary(d);
    addBookToLibrary(e);
    printLibrary();
}

function openForm(){
    document.getElementById("formPopup").style.display = "flex";
    document.getElementById("formPopup").style.justifyContent = "center";
}

function closeForm(){
    document.getElementById("formPopup").style.display = "none";
}

game()