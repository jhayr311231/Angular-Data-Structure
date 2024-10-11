import { Injectable } from '@angular/core';

interface Tour {
  name: string;
  destination: string;
  duration: number; // Duration in days
}

@Injectable({
  providedIn: 'root'
})
export class TourListService {
  private tours: Tour[] = [];

  constructor() {
    // Sample tours
    this.tours = [
      { name: 'Beach Getaway', destination: 'Maldives', duration: 7 },
      { name: 'Mountain Trek', destination: 'Himalayas', duration: 10 },
      { name: 'City Explorer', destination: 'New York', duration: 5 }
    ];
  }

  getTours(): Tour[] {
    return this.tours;
  }

  addTour(name: string, destination: string, duration: number) {
    this.tours.push({ name, destination, duration });
  }

  editTour(index: number, name: string, destination: string, duration: number) {
    if (index >= 0 && index < this.tours.length) {
      this.tours[index] = { name, destination, duration };
    }
  }

  removeTour(index: number) {
    if (index >= 0 && index < this.tours.length) {
      this.tours.splice(index, 1);
    }
  }
}
