class BookList {
  constructor(_nextBook, _currentBook, _allBooks) {
    this.currentBook = _currentBook; //Book
    this.lastBookRead;
    this.allBooks = _allBooks; //Array
    let index = allBooks.indexOf(_currentBook);
    if (index != allBooks.lenght) {
      this.nextBook = allBooks[index + 1];
    } else {
      this.nextBook = allBooks[0];
    }
    let counter = 0;
    allBooks.forEach((book) => {
      if (book.read) {
        counter++;
      }
    });
    this.markedRead = counter; //Number
    this.markedNoReadYet = this.allBooks - counter; //Number
  }

  add(book) {
    this.allBooks.push(book);
  }

  finished() {
    this.currentBook.read = true;
    this.currentBook.readDate = new Date(Date.now());
    this.lastBookRead = this.currentBook;
    this.currentBook = this.nextBook;
    let unreadBooks = allBooks.filter((book) => book.read === false);
    if (unreadBooks == true) {
      this.nextBook = unreadBooks[0];
    }
    this.markedRead++;
    this.markedNoReadYet--;
  }
}

class Book {
  constructor(_title, _genre, _author, _read, _readDate = "") {
    this.title = _title;
    this.genre = _genre;
    this.author = _author;
    this.read = _read; //Boolian
    if (_readDate === "") {
      this.readDate = new Date(Date.now());
    } else {
      this.readDate = _readDate;
    }
  }
}
