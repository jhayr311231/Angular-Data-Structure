import { Component } from '@angular/core';

// Define the Stationery interface
interface Stationery {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
// Properties to hold new stationery input values
newStationeryName: string = '';
newStationeryQuantity: number = 1;

// List of stationery items
stationeryList: Stationery[] = [
  { name: 'Pen', quantity: 10 },
  { name: 'Pencil', quantity: 20 },
  { name: 'Notebook', quantity: 5 },
];

// Property for search input
searchQuery: string = '';

// Property to hold the index of the stationery being edited
editIndex: number | null = null;

// Temporary properties to store the edited stationery values
editedStationeryName: string = '';
editedStationeryQuantity: number = 0;

// Method to add a new stationery item to the list
addStationery() {
  if (this.newStationeryName.trim() && this.newStationeryQuantity > 0) {
    this.stationeryList.push({
      name: this.newStationeryName,
      quantity: this.newStationeryQuantity
    });
    this.newStationeryName = ''; // Reset input fields
    this.newStationeryQuantity = 1;
  }
}

// Method to get the filtered list of stationery items based on the search query
getFilteredList(): Stationery[] {
  if (this.searchQuery.trim()) {
    return this.stationeryList.filter(stationery =>
      stationery.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  return this.stationeryList;
}

// Method to edit a stationery item
editStationery(index: number) {
  this.editIndex = index;
  this.editedStationeryName = this.stationeryList[index].name;
  this.editedStationeryQuantity = this.stationeryList[index].quantity;
}

// Method to save the edited stationery
saveEdit() {
  if (this.editIndex !== null) {
    this.stationeryList[this.editIndex] = {
      name: this.editedStationeryName,
      quantity: this.editedStationeryQuantity
    };
    this.editIndex = null; // Exit edit mode
    this.editedStationeryName = ''; // Reset edit input
    this.editedStationeryQuantity = 0; // Reset edit input
  }
}

// Method to remove a stationery item from the list
removeStationery(index: number) {
  this.stationeryList.splice(index, 1);
}

}
