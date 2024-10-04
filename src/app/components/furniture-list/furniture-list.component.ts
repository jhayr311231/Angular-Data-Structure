import { Component } from '@angular/core';

export interface Furniture {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitureItems: Furniture[] = [];
  newItem: Furniture = { name: '', category: '', price: 0, imageUrl: '' };
  searchTerm: string = '';

  addFurniture() {
    if (this.newItem.name && this.newItem.category && this.newItem.price) {
      this.furnitureItems.push({ ...this.newItem });
      this.newItem = { name: '', category: '', price: 0, imageUrl: '' }; // Reset form
    }
  }

  removeFurniture(index: number) {
    this.furnitureItems.splice(index, 1);
  }

  editFurniture(index: number) {
    this.newItem = { ...this.furnitureItems[index] };
    this.removeFurniture(index);
  }

  getFilteredItems(): Furniture[] {
    return this.furnitureItems.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
