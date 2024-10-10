import { Component } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service'; // Import the service

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: string[] = []; // Array to hold the list of movies
  newMovie: string = ''; // Variable to bind to the input field

  constructor(private movieListService: MovieListService) {
    this.movies = this.movieListService.getMovieList(); // Fetch the initial list of movies
  }

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
