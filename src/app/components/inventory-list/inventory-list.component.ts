import { Component } from '@angular/core';
import { InventoryListService } from '../../services/inventory-list.service';


// Define the InventoryItem interface
interface InventoryItem {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
 // Properties to hold new item input values
 newItemName: string = '';
 newItemQuantity: number | null = null;
 newItemPrice: number | null = null;

 // List of items in the inventory
 inventoryList: InventoryItem[] = [
   { name: 'Apples', quantity: 100, price: 50 },
   { name: 'Bananas', quantity: 50, price: 100 },
   { name: 'Oranges', quantity: 80, price: 60 },
 ];

 // Property for search input
 searchQuery: string = '';

 // Property to hold the index of the item being edited
 editIndex: number | null = null;

 // Temporary properties to store the edited item values
 editedItemName: string = '';
 editedItemQuantity: number | null = null;
 editedItemPrice: number | null = null;

 constructor(private inventoryListService: InventoryListService) {}

 // Method to add a new item to the inventory
 addItem() {
   if (this.newItemName.trim() && this.newItemQuantity !== null && this.newItemPrice !== null) {
     this.inventoryList.push({
       name: this.newItemName,
       quantity: this.newItemQuantity,
       price: this.newItemPrice
     });
     this.newItemName = ''; // Reset input fields
     this.newItemQuantity = null;
     this.newItemPrice = null;
   }
 }

 // Method to get the filtered list of items based on the search query
 getFilteredList(): InventoryItem[] {
   if (this.searchQuery.trim()) {
     return this.inventoryList.filter(item =>
       item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
     );
   }
   return this.inventoryList;
 }

 // Method to edit an item
 editItem(index: number) {
   this.editIndex = index;
   this.editedItemName = this.inventoryList[index].name;
   this.editedItemQuantity = this.inventoryList[index].quantity;
   this.editedItemPrice = this.inventoryList[index].price;
 }

 // Method to save the edited item
 saveEdit() {
   if (this.editIndex !== null) {
     this.inventoryList[this.editIndex] = {
       name: this.editedItemName,
       quantity: this.editedItemQuantity!,
       price: this.editedItemPrice!
     };
     this.editIndex = null; // Exit edit mode
     this.editedItemName = ''; // Reset edit input
     this.editedItemQuantity = null; // Reset edit input
     this.editedItemPrice = null; // Reset edit input
   }
 }

 // Method to remove an item from the inventory
 removeItem(index: number) {
   this.inventoryList.splice(index, 1);
 }

}
