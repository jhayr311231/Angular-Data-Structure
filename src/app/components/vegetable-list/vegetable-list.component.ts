import { Component } from '@angular/core';
import { VegetableListService } from '../../services/vegetable-list.service'; // Import the service

interface Vegetable {
  name: string;
  price: number;
}

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: string[] = []; // Array to hold the list of vegetables
  newVegetable: string = ''; // Variable to bind to the input field

  constructor(private vegetableListService: VegetableListService) {
    this.vegetables = this.vegetableListService.getVegetableList(); // Fetch the initial list of vegetables
  }

  // Method to add a new vegetable to the list
  addVegetable() {
    if (this.newVegetable.trim()) { // Check if the input is not empty
      this.vegetables.push(this.newVegetable.trim());
      this.newVegetable = ''; // Clear the input field after adding
    }
  }

  // Method to remove a vegetable from the list
  removeVegetable(index: number) {
    this.vegetables.splice(index, 1); // Remove the vegetable at the specified index
  }

}
