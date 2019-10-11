let myLibrary = [];

function Book(title, author, pages, read, select) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.select = false;
    this.info = function() {
        return title + "by " + author + ", " + pages + " pages, " + read; 
    }
}

function addBookToLibrary() {

}

function displayBookForm() {
    const bookForm = document.querySelector('form');
    bookForm.style.display = "block";
    const addNewButton = document.querySelector('#add-book');
    addNewButton.style.display = "none";
}

function resetForm() {

}


function createNewBookForm(){
    console.log("work");
    const newBook = new Book(document.getElementById("title").value
    ,document.getElementById("author").value,document.getElementById("pages").value
    ,document.querySelector('input[name="read-book"]:checked').value);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    renderBook(newBook);
}

function renderBook(newBook) {
    const newRow = document.createElement("tr");
    renderCell(newBook.title,newRow);
    renderCell(newBook.author,newRow);
    renderCell(newBook.pages,newRow);
    renderCell(newBook.read,newRow);
    renderCellSelect(newRow);
}
function renderCell(text, rowBook) {
        const bookTable = document.querySelector('tbody');
        const newCell = document.createElement("td");
        var addText = document.createTextNode(text);
        newCell.appendChild(addText);
        rowBook.appendChild(newCell);
        bookTable.appendChild(rowBook);
 
}

function renderCellSelect(rowBook) {
    const newCell = document.createElement("td");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.name = "selector";
    newCell.appendChild(input);
    rowBook.appendChild(newCell);
}

function resetNewBook() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    var radioArray = document.getElementsByName('read-book');
    console.log(radioArray);

    for (var i=0; i<radioArray.length; i++)
    {
     var radioButton = radioArray[i];
     radioButton.checked = false;
    }
}

function removeSelected() {
    const bookTable = document.querySelector('tbody');
    let bookRows = document.querySelectorAll('table input');
    let buffer = 0;
    for (let i=0; i < bookRows.length; i++) {
        console.log("Given" + i);
        if (bookRows[i].checked == true) {
            console.log(bookTable);
            bookTable.children[i+1 - buffer].remove();
            console.log(bookTable);
            console.log("work" + i);
            buffer += 1;
        }
    }
}

function exitForm() {
    const bookForm = document.querySelector('form');
    bookForm.style.display = "none";
    const addNewButton = document.querySelector('#add-book');
    addNewButton.style.display = "inline-block";
}

const addNewButton = document.querySelector('#add-book');
addNewButton.addEventListener('click', displayBookForm);

const exitButton = document.querySelector('#exit-button');
exitButton.addEventListener('click', exitForm);

const submitNewButton = document.querySelector('#submit-new-book');
submitNewButton.addEventListener('click', createNewBookForm);

const resetNewButton = document.querySelector('#reset-new-book');
resetNewButton.addEventListener('click', resetNewBook);

const removeButton = document.querySelector('#remove-book');
removeButton.addEventListener('click', removeSelected);