import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private books: string[] = [];

  constructor() { }

// Method to get the list of books
getBookList(): string[] {
  return this.books;
}

// Method to add a new book
addBook(newBook: string): void {
  if (newBook.trim()) {
    this.books.push(newBook.trim());
  }
}


}
