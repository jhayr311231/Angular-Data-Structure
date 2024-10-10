import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../../services/food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  // Array to store the food items
  menu: { name: string; price: number; description: string }[] = [];

  // Model for a new food item entry
  newFoodItem = { name: '', price: 0, description: '' };
  editIndex: number | null = null;

  constructor(private foodMenuService: FoodMenuService) {}

  // Lifecycle hook to initialize the menu
  ngOnInit(): void {
    this.menu = this.foodMenuService.getMenu(); // Initialize menu in ngOnInit
  }

  // Add or edit a food item
  addFoodItem() {
    if (this.editIndex === null) {
      this.foodMenuService.addFoodItem({ ...this.newFoodItem });
    } else {
      this.foodMenuService.updateFoodItem(this.editIndex, { ...this.newFoodItem });
      this.editIndex = null; // Exit editing mode
    }
    this.resetForm();
    this.refreshMenu(); // Refresh the menu after adding or editing
  }

  // Edit an existing food item
  editFoodItem(index: number) {
    this.newFoodItem = { ...this.menu[index] };
    this.editIndex = index;
  }

  // Remove a food item from the list
  removeFoodItem(index: number) {
    this.foodMenuService.removeFoodItem(index);
    this.refreshMenu(); // Refresh the menu after removing
  }

  // Reset the form after adding or editing
  resetForm() {
    this.newFoodItem = { name: '', price: 0, description: '' };
  }

  // Method to refresh the menu
  refreshMenu() {
    this.menu = this.foodMenuService.getMenu(); // Update the menu list
  }
}
