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
        card.innerHTML = myLibrary[i].title;
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