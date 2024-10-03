import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits: string[] = []; // Array to hold the list of fruits
  newFruit: string = ''; // Variable to bind to the input field

  // Method to add a new fruit to the list
  addFruit() {
    if (this.newFruit.trim()) { // Check if the input is not empty
      this.fruits.push(this.newFruit.trim());
      this.newFruit = ''; // Clear the input field after adding
    }
  }

  // Method to get the list of fruits (could be omitted if not needed)
  getFruitList() {
    return this.fruits;
  }

}
