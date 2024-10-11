import { Injectable } from '@angular/core';

// Define the Building interface
export interface Building {
  name: string;
  floors: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BuildingListService {
    private buildingList: Building[] = [
      { name: 'Science Hall', floors: 5, description: 'Main science building' },
      { name: 'Library', floors: 3, description: 'Campus library' }
    ];

  constructor() { }

// Method to get the list of buildings
getBuildingList(): Building[] {
  return this.buildingList;
}

// Method to add a new building to the list
addBuilding(building: Building) {
  this.buildingList.push(building);
}

// Method to remove a building by index
removeBuilding(index: number) {
  this.buildingList.splice(index, 1);
}

// Method to update a building
updateBuilding(index: number, building: Building) {
  this.buildingList[index] = building;
}
}

