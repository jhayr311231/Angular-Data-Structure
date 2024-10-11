import { Component } from '@angular/core';
import { AccessoryListService } from '../../services/accessory-list.service';

export interface Accessory {
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessoryItems: Accessory[] = [];
  newItem: Accessory = { name: '', type: '', price: 0, imageUrl: '' };
  searchTerm: string = '';

  constructor(private accessoryListService: AccessoryListService) {
    // Fetch the accessory list from the service
    this.accessoryItems = this.accessoryListService.getAccessoryList(); // Use accessoryItems
  }

  addAccessory() {
    if (this.newItem.name && this.newItem.type && this.newItem.price > 0) { // Check if price is greater than 0
      this.accessoryItems.push({ ...this.newItem });
      this.newItem = { name: '', type: '', price: 0, imageUrl: '' }; // Reset form
    }
  }

  removeAccessory(index: number) {
    this.accessoryItems.splice(index, 1);
  }

  editAccessory(index: number) {
    this.newItem = { ...this.accessoryItems[index] };
    this.removeAccessory(index);
  }

  getFilteredItems(): Accessory[] {
    return this.accessoryItems.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
