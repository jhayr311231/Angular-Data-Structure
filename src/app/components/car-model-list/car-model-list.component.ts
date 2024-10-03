import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModels: string[] = ['Tesla Model 3', 'BMW X5', 'Audi A6']; // Initial list of car models
  newCarModel: string = ''; // Variable to bind to the input field for adding a new car model
  editIndex: number | null = null; // Index of the car being edited, null means no editing mode
  searchQuery: string = ''; // Filter query for searching car models

  // Add a new car model
  addCarModel() {
    if (this.newCarModel.trim()) {
      if (this.editIndex === null) {
        // Add new car model if not in edit mode
        this.carModels.push(this.newCarModel.trim());
      } else {
        // Update the car model if in edit mode
        this.carModels[this.editIndex] = this.newCarModel.trim();
        this.editIndex = null; // Exit edit mode
      }
      this.newCarModel = ''; // Clear the input field
    }
  }

  // Edit an existing car model
  editCarModel(index: number) {
    this.newCarModel = this.carModels[index]; // Set the input field to the selected car model
    this.editIndex = index; // Set the index for edit mode
  }

  // Remove a car model from the list
  removeCarModel(index: number) {
    this.carModels.splice(index, 1);
  }

  // Get the filtered list of car models based on the search query
  getFilteredCarModels() {
    return this.carModels.filter(car => 
      car.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

}
