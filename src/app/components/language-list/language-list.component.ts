import { Component } from '@angular/core';
import { LanguageListService } from '../../services/language-list.service'; // Import the service

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: string[] = ['JavaScript', 'Python', 'Java', 'C#', 'Go'];
  newLanguage: string = '';
  editIndex: number | null = null; // Track the index of the language being edited

// Inject the LanguageListService
constructor(private languageListService: LanguageListService) {
  this.languages = this.languageListService.getLanguageList(); // Fetch the initial list of languages
}

  // Function to add a new programming language to the list
  addLanguage() {
    if (this.newLanguage.trim()) {
      if (this.editIndex === null) {
        this.languageListService.addLanguage(this.newLanguage); // Add via service
      } else {
        this.languageListService.updateLanguage(this.editIndex, this.newLanguage); // Update via service
        this.editIndex = null; // Reset edit index after updating
      }
      this.newLanguage = ''; // Clear input after adding or editing
      this.updateLanguageList(); // Refresh the local list
    }
  }
  // Function to remove a programming language from the list
  removeLanguage(language: string) {
    this.languageListService.removeLanguage(language); // Remove via service
    this.updateLanguageList(); // Refresh the local list
  }
// Function to set the language for editing
  editLanguage(index: number) {
    this.newLanguage = this.languages[index]; // Populate input with the language to edit
    this.editIndex = index; // Set the index for editing
}
  // Function to refresh the local languages array from the service
  private updateLanguageList() {
    this.languages = this.languageListService.getLanguageList(); // Update local list from service
  }
}
