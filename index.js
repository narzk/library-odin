let myLibrary = []
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = () => `The ${title} by ${author}, ${pages} pages, not read yet`
}

function addBookToLibrary(book) {
  let book = new Book(book.title, book.author, book.pages)
  myLibrary.push(Book)
}

function submitHandler(value) {
  addBookToLibrary(value)
}

//TODO add form
// Add view to show
//Optional
//Add button to erase
