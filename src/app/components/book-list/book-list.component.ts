import { Component } from '@angular/core';
import { BookListService } from '../../services/book-list.service'; // Import the service

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: string[] = []; // Array to hold the list of books
  newBook: string = ''; // Variable to bind to the input field

  constructor(private bookListService: BookListService) {
    this.books = this.bookListService.getBookList(); // Fetch the initial list of books
  }

  // Method to add a new book to the list
  addBook() {
    if (this.newBook.trim()) { // Check if the input is not empty
      this.books.push(this.newBook.trim());
      this.newBook = ''; // Clear the input field after adding
    }
  }

  // Method to remove a book from the list
  removeBook(index: number) {
    this.books.splice(index, 1); // Remove the book at the specified index
  }

}
