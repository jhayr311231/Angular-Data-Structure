import { Injectable } from '@angular/core';

interface Presentation {
  title: string;
  date: string; // Use string for simplicity; consider using Date type for better handling
  duration: number; // Duration in minutes
}

@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
  private presentations: Presentation[] = [];

  constructor() {
    // Sample presentations
    this.presentations = [
      { title: 'Angular Basics', date: '2024-10-15', duration: 30 },
      { title: 'Advanced TypeScript', date: '2024-10-20', duration: 45 },
      { title: 'RxJS in Depth', date: '2024-10-25', duration: 60 }
    ];
  }

  getPresentations(): Presentation[] {
    return this.presentations;
  }

  addPresentation(title: string, date: string, duration: number) {
    this.presentations.push({ title, date, duration });
  }

  editPresentation(index: number, title: string, date: string, duration: number) {
    if (index >= 0 && index < this.presentations.length) {
      this.presentations[index] = { title, date, duration };
    }
  }

  removePresentation(index: number) {
    if (index >= 0 && index < this.presentations.length) {
      this.presentations.splice(index, 1);
    }
  }
}

