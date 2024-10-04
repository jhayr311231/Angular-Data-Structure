import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {

  presentations: string[] = []; // Array to hold presentation topics
  newPresentation: string = ''; // Variable to hold new presentation input
  searchTerm: string = ''; // Variable to hold search term

  // Method to add a new presentation topic
  addPresentation() {
    if (this.newPresentation.trim() !== '') {
      this.presentations.push(this.newPresentation.trim());
      this.newPresentation = ''; // Clear input field
    }
  }

  // Method to remove a presentation topic by index
  removePresentation(index: number) {
    this.presentations.splice(index, 1);
  }

  // Method to edit a presentation topic
  editPresentation(index: number) {
    const updatedTopic = prompt('Edit presentation topic:', this.presentations[index]);
    if (updatedTopic !== null) {
      this.presentations[index] = updatedTopic;
    }
  }

  // Method to get filtered presentation list based on search term
  getFilteredPresentations() {
    return this.presentations.filter(presentation => 
      presentation.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
