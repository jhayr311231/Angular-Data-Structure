import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: string[] = []; // Array to hold the list of movies
  newMovie: string = ''; // Variable to bind to the input field

  // Method to add a new movie to the list
  addMovie() {
    if (this.newMovie.trim()) { // Check if the input is not empty
      this.movies.push(this.newMovie.trim());
      this.newMovie = ''; // Clear the input field after adding
    }
  }

  // Method to remove a movie from the list
  removeMovie(index: number) {
    this.movies.splice(index, 1); // Remove the movie at the specified index
  }

}
