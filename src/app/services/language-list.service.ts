import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  private languages: string[] = ['JavaScript', 'Python', 'Java', 'C#', 'Go']; // Initialize with some languages


  constructor() { }

   // Method to get the list of languages
   getLanguageList(): string[] {
    return this.languages;
  }

  // Method to add a new language
  addLanguage(language: string): void {
    this.languages.push(language);
  }

  // Method to remove a language
  removeLanguage(language: string): void {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }

  // Method to update a language at a specific index
  updateLanguage(index: number, language: string): void {
    if (index >= 0 && index < this.languages.length) {
      this.languages[index] = language; // Update the language at the specified index
    }
  }
}


