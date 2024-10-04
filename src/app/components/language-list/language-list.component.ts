import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: string[] = ['JavaScript', 'Python', 'Java', 'C#', 'Go'];
  newLanguage: string = '';

  // Function to add a new programming language to the list
  addLanguage() {
    if (this.newLanguage.trim()) {
      this.languages.push(this.newLanguage);
      this.newLanguage = ''; // Clear input after adding
    }
  }

  // Function to get the list of programming languages
  getLanguageList() {
    return this.languages;
  }
}
