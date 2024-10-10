import { Component } from '@angular/core';
import { GroceryListService } from '../../services/grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
// Properties to hold the new grocery item input values
newItemName: string = '';
newItemQuantity: number | null = null;

// List of grocery items
groceryList: { name: string; quantity: number }[] = [
  { name: 'Milk', quantity: 2 },
  { name: 'Eggs', quantity: 12 },
  { name: 'Bread', quantity: 1 },
];

// Property for search input
searchQuery: string = '';

// Property to hold the index of the grocery item being edited
editIndex: number | null = null;

// Temporary properties to store the edited grocery item values
editedItemName: string = '';
editedItemQuantity: number | null = null;

constructor(private groceryListService: GroceryListService) {}

ngOnInit(): void {
  this.groceryList = this.groceryListService.getGroceryList();
}

// Method to add a new grocery item to the list
addItem() {
  if (this.newItemName.trim() && this.newItemQuantity !== null) {
    this.groceryList.push({ name: this.newItemName, quantity: this.newItemQuantity });
    this.newItemName = ''; // Reset input field
    this.newItemQuantity = null; // Reset input field
  }
}

// Method to get the filtered list of grocery items based on the search query
getFilteredList(): { name: string; quantity: number }[] {
  if (this.searchQuery.trim()) {
    return this.groceryList.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  return this.groceryList;
}

// Method to edit a grocery item
editItem(index: number) {
  this.editIndex = index;
  this.editedItemName = this.groceryList[index].name;
  this.editedItemQuantity = this.groceryList[index].quantity;
}

// Method to save the edited grocery item
saveEdit() {
  if (this.editIndex !== null) {
    this.groceryList[this.editIndex] = {
      name: this.editedItemName,
      quantity: this.editedItemQuantity!
    };
    this.editIndex = null; // Exit edit mode
    this.editedItemName = ''; // Reset edit input
    this.editedItemQuantity = null; // Reset edit input
  }
}

// Method to remove a grocery item from the list
removeItem(index: number) {
  this.groceryList.splice(index, 1);
}

}
