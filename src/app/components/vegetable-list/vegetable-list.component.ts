import { Component } from '@angular/core';

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
  // Array to store vegetables
  vegetables: Vegetable[] = [
    { name: 'Carrot', price: 180},
    { name: 'Broccoli', price: 250 },
    { name: 'Spinach', price: 160 }
  ];

  // Model for new vegetable entry
  newVegetable: Vegetable = { name: '', price: 0 };
  editIndex: number | null = null;

  // Add or edit a vegetable
  addVegetable() {
    if (this.editIndex === null) {
      this.vegetables.push({ ...this.newVegetable });
    } else {
      this.vegetables[this.editIndex] = { ...this.newVegetable };
      this.editIndex = null;
    }
    this.resetForm();
  }

  // Edit an existing vegetable
  editVegetable(index: number) {
    this.newVegetable = { ...this.vegetables[index] };
    this.editIndex = index;
  }

  // Remove a vegetable from the list
  removeVegetable(index: number) {
    this.vegetables.splice(index, 1);
  }

  // Reset the form after adding or editing
  resetForm() {
    this.newVegetable = { name: '', price: 0 };
  }

}
