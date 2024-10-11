import { Injectable } from '@angular/core';

export interface Library {
  name: string;
  version: string;
  description: string;
  category: string; // e.g., JavaScript, CSS, Utility, etc.
}

@Injectable({
  providedIn: 'root'
})
export class LibraryListService {
  private libraries: Library[] = [
    {
      name: 'Lodash',
      version: '4.17.21',
      description: 'A modern JavaScript utility library delivering modularity, performance & extras.',
      category: 'JavaScript'
    },
    {
      name: 'Moment.js',
      version: '2.29.1',
      description: 'Parse, validate, manipulate, and display dates in JavaScript.',
      category: 'JavaScript'
    },
    {
      name: 'Bootstrap',
      version: '5.1.0',
      description: 'The most popular HTML, CSS, and JS library in the world.',
      category: 'CSS'
    },
    {
      name: 'Tailwind CSS',
      version: '2.2.19',
      description: 'A utility-first CSS framework for rapid UI development.',
      category: 'CSS'
    },
    {
      name: 'jQuery',
      version: '3.6.0',
      description: 'A fast, small, and feature-rich JavaScript library.',
      category: 'JavaScript'
    }
  ];

  constructor() { }

 // Retrieve the full list of libraries
 getLibraries(): Library[] {
  return this.libraries;
}

// Add a new library to the list
addLibrary(library: Library) {
  this.libraries.push(library);
}

// Remove a library from the list
removeLibrary(index: number) {
  this.libraries.splice(index, 1);
}

// Edit an existing library
editLibrary(index: number, updatedLibrary: Library) {
  this.libraries[index] = updatedLibrary;
}
}
