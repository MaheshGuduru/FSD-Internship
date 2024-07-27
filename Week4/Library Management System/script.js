class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }
}

const library = [];

document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBook();
});

function addBook() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const genre = document.getElementById('genre').value.trim();

    if (title && author && pages && genre) {
        const newBook = new Book(title, author, pages, genre);
        library.push(newBook);
        displayBooks(library);
        clearForm();
    } else {
        alert('All fields are required.');
    }
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('genre').value = '';
}

function displayBooks(books) {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;
        bookListElement.appendChild(li);
    });
}

function searchBooks() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchInput));
    
    displayBooks(filteredBooks);
    
    const searchMessage = document.getElementById('search-message');
    if (filteredBooks.length === 0) {
        searchMessage.textContent = 'No books found.';
    } else {
        searchMessage.textContent = '';
    }
}
