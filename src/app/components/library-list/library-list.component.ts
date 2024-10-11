import { Component } from '@angular/core';
import { LibraryListService } from '../../services/library-list.service';

export interface Library {
  name: string;
  version: string;
  description: string;
  category: string; // e.g., JavaScript, CSS, Utility, etc.
}


@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries: { name: string; version: string; description: string }[] = []; // Array to hold library details
  newLibraryName: string = ''; // Variable to hold new library name input
  newLibraryVersion: string = ''; // Variable to hold new library version input
  newLibraryDescription: string = ''; // Variable to hold new library description input
  searchTerm: string = ''; // Variable to hold search term

  constructor(private libraryListService: LibraryListService) {
    // Initialize libraries from the service
    this.libraries = this.libraryListService.getLibraries();
  }

  // Method to add a new library
  addLibrary() {
    if (this.newLibraryName.trim() !== '' && this.newLibraryVersion.trim() !== '' && this.newLibraryDescription.trim() !== '') {
      this.libraries.push({
        name: this.newLibraryName.trim(),
        version: this.newLibraryVersion.trim(),
        description: this.newLibraryDescription.trim(),
      });
      this.newLibraryName = ''; // Clear input field
      this.newLibraryVersion = ''; // Clear input field
      this.newLibraryDescription = ''; // Clear input field
    }
  }

  // Method to remove a library by index
  removeLibrary(index: number) {
    this.libraries.splice(index, 1);
  }

  // Method to edit a library
  editLibrary(index: number) {
    const updatedName = prompt('Edit library name:', this.libraries[index].name);
    const updatedVersion = prompt('Edit library version:', this.libraries[index].version);
    const updatedDescription = prompt('Edit library description:', this.libraries[index].description);
    if (updatedName !== null && updatedVersion !== null && updatedDescription !== null) {
      this.libraries[index] = {
        name: updatedName,
        version: updatedVersion,
        description: updatedDescription,
      };
    }
  }

  // Method to get filtered library list based on search term
  getFilteredLibraries() {
    return this.libraries.filter(library =>
      library.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      library.version.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      library.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
