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
        titP.textContent = `${myLibrary[i].title}`;
        authP.textContent += `${myLibrary[i].author}`;
        pagesP.textContent += `${myLibrary[i].pages}`;
        card.appendChild(titP);
        card.appendChild(authP);
        card.appendChild(pagesP);
        document.getElementsByClassName("main")[0].appendChild(card);
    }
}

function game(){
    let a = new Book('FF', 'FFFFFFFFF', '99');
    let b = new Book('FF', 'FFFFFFFFF', '99');
    let c = new Book('FF', 'FFFFFFFFF', '99');
    let d = new Book('FF', 'FFFFFFFFF', '99');
    let e = new Book('FF', 'FFFFFFFFF', '99');
    addBookToLibrary(a);
    addBookToLibrary(b);
    addBookToLibrary(c);
    addBookToLibrary(d);
    addBookToLibrary(e);
    printLibrary();
}

game()