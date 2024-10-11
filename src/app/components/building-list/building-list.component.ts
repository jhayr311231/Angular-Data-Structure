import { Component } from '@angular/core';
import { BuildingListService } from '../../services/building-list.service';

// Define an interface for Building
interface Building {
  name: string;
  floors: number;
  description: string;
}

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  newBuilding = {
    name: '',
    floors: 0,
    description: ''
  };

  buildingList = [
    { name: 'Science Hall', floors: 5, description: 'Main science building' },
    { name: 'Library', floors: 3, description: 'Campus library' }
  ];

  searchTerm = '';
  editingIndex: number | null = null;

  constructor(private buildingListService: BuildingListService) {
    // Fetch the building list from the service
    this.buildingList = this.buildingListService.getBuildingList();
  }

  addBuilding() {
    if (this.editingIndex !== null) {
      this.buildingList[this.editingIndex] = { ...this.newBuilding };
      this.editingIndex = null;
    } else {
      this.buildingList.push({ ...this.newBuilding });
    }
    this.resetForm();
  }

  editBuilding(index: number) {
    this.newBuilding = { ...this.buildingList[index] };
    this.editingIndex = index;
  }

  removeBuilding(index: number) {
    this.buildingList.splice(index, 1);
  }

  getFilteredBuildings() {
    if (!this.searchTerm) {
      return this.buildingList;
    }
    return this.buildingList.filter(building =>
      building.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetForm() {
    this.newBuilding = { name: '', floors: 0, description: '' };
  }

}
