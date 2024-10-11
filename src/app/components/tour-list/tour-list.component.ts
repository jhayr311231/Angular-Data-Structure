import { Component } from '@angular/core';
import { TourListService } from '../../services/tour-list.service';

interface Tour {
  name: string;
  destination: string;
  duration: number; // Duration in days
}

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {
  newTour: Tour = { name: '', destination: '', duration: 0 };
  searchTerm: string = '';
  editIndex: number | null = null;

  constructor(private tourListService: TourListService) {}

  get tours(): Tour[] {
    return this.tourListService.getTours();
  }

  getFilteredTours(): Tour[] {
    if (!this.searchTerm) {
      return this.tours;
    }
    return this.tours.filter(tour =>
      tour.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addTour() {
    if (this.newTour.name.trim() !== '' && this.newTour.duration > 0) {
      if (this.editIndex !== null) {
        this.tourListService.editTour(this.editIndex, this.newTour.name, this.newTour.destination, this.newTour.duration);
        this.editIndex = null;
      } else {
        this.tourListService.addTour(this.newTour.name, this.newTour.destination, this.newTour.duration);
      }
      this.newTour = { name: '', destination: '', duration: 0 };
    }
  }

  editTour(index: number) {
    const tour = this.tours[index];
    this.newTour = { ...tour };
    this.editIndex = index;
  }

  removeTour(index: number) {
    this.tourListService.removeTour(index);
  }
}
