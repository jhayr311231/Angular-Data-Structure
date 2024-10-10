import { Injectable } from '@angular/core';

// Define the InventoryItem interface
export interface InventoryItem {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
// List of items in the inventory
private inventoryList: InventoryItem[] = [
  { name: 'Apples', quantity: 100, price: 50 },
  { name: 'Bananas', quantity: 50, price: 100 },
  { name: 'Oranges', quantity: 80, price: 60 },
];
  constructor() { }

 // Method to get the inventory list
 getInventory(): InventoryItem[] {
  return this.inventoryList;
}

// Method to add a new item to the inventory
addItem(item: InventoryItem) {
  this.inventoryList.push(item);
}

// Method to edit an item
editItem(index: number, item: InventoryItem) {
  this.inventoryList[index] = item;
}

// Method to remove an item from the inventory
removeItem(index: number) {
  this.inventoryList.splice(index, 1);
}

// Method to filter the inventory list based on the search query
filterInventory(query: string): InventoryItem[] {
  return this.inventoryList.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}


}
