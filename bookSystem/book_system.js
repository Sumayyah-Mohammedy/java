let books = [];
function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const pageNumbers = parseInt(document.getElementById('pageNumbers').value);
    const bookDescription = document.getElementById('bookDescription').value;
    if (bookName && bookDescription && !isNaN(pageNumbers)){
        const book = {
            name: bookName,
            author: authorName,
            Description: bookDescription,
            pageNumbers: pageNumbers
        };
        books.push(book);
        showbooks();
        clearInputs();
    }else{
        alert('Please fill correct information');
    }
}

function showbooks(){
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name:</strong>${book.name}</p>
    <p><strong>Author Name:</strong>${book.author}</p>
    <p><strong>Book Description:</strong>${book.Description}</p>
    <p><strong>Page Numbers: </strong>${book.pageNumbers}</p>` 
    );
    document.getElementById('books').innerHTML=booksDiv.join('');
}

function clearInputs(){
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('bookDescription').value='';
    document.getElementById('pagesNumber').value='';
}