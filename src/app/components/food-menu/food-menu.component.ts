import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
   // Properties to hold the new food item input values
  newFoodName: string = '';
  newFoodPrice: number | null = null;

  // List of food items in the menu
  foodMenu: { name: string; price: number }[] = [
    { name: 'Pizza', price: 250.00 },
    { name: 'Burger', price: 90.00 },
    { name: 'Pasta', price: 120.00 },
  ];

  // Property for search input
  searchQuery: string = '';

  // Property to hold the index of the food item being edited
  editIndex: number | null = null;

  // Temporary properties to store the edited food item values
  editedFoodName: string = '';
  editedFoodPrice: number | null = null;

  // Method to add a new food item to the menu
  addFood() {
    if (this.newFoodName.trim() && this.newFoodPrice !== null) {
      this.foodMenu.push({ name: this.newFoodName, price: this.newFoodPrice });
      this.newFoodName = ''; // Reset input field
      this.newFoodPrice = null; // Reset input field
    }
  }

  // Method to get the filtered list of food items based on the search query
  getFilteredMenu(): { name: string; price: number }[] {
    if (this.searchQuery.trim()) {
      return this.foodMenu.filter(food =>
        food.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.foodMenu;
  }

  // Method to edit a food item
  editFood(index: number) {
    this.editIndex = index;
    this.editedFoodName = this.foodMenu[index].name;
    this.editedFoodPrice = this.foodMenu[index].price;
  }

  // Method to save the edited food item
  saveEdit() {
    if (this.editIndex !== null) {
      this.foodMenu[this.editIndex] = {
        name: this.editedFoodName,
        price: this.editedFoodPrice!
      };
      this.editIndex = null; // Exit edit mode
      this.editedFoodName = ''; // Reset edit input
      this.editedFoodPrice = null; // Reset edit input
    }
  }

  // Method to remove a food item from the menu
  removeFood(index: number) {
    this.foodMenu.splice(index, 1);
  }

}
