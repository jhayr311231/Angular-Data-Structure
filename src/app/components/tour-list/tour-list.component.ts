import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  tours: { date: string; location: string }[] = []; // Array to hold tour dates and locations
  newTourDate: string = ''; // Variable to hold new tour date input
  newTourLocation: string = ''; // Variable to hold new tour location input
  searchTerm: string = ''; // Variable to hold search term

  // Method to add a new tour date and location
  addTour() {
    if (this.newTourDate.trim() !== '' && this.newTourLocation.trim() !== '') {
      this.tours.push({ date: this.newTourDate.trim(), location: this.newTourLocation.trim() });
      this.newTourDate = ''; // Clear input field
      this.newTourLocation = ''; // Clear input field
    }
  }

  // Method to remove a tour by index
  removeTour(index: number) {
    this.tours.splice(index, 1);
  }

  // Method to edit a tour date and location
  editTour(index: number) {
    const updatedDate = prompt('Edit tour date:', this.tours[index].date);
    const updatedLocation = prompt('Edit tour location:', this.tours[index].location);
    if (updatedDate !== null && updatedLocation !== null) {
      this.tours[index] = { date: updatedDate, location: updatedLocation };
    }
  }

  // Method to get filtered tour list based on search term
  getFilteredTours() {
    return this.tours.filter(tour => 
      tour.date.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      tour.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
