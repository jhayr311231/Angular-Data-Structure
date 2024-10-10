import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private movies: string[] = [];

  constructor() { }

// Method to get the list of movies
getMovieList(): string[] {
  return this.movies;
}

// Method to add a new movie
addMovie(newMovie: string): void {
  if (newMovie.trim()) {
    this.movies.push(newMovie.trim());
  }
}

}
