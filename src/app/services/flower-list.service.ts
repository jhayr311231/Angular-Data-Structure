import { Injectable } from '@angular/core';

// Define the Flower interface
interface Flower {
  name: string;
  color: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlowerListService {
// Initial list of flowers
private flowerList: Flower[] = [
  { name: 'Rose', color: 'Red', quantity: 10 },
  { name: 'Lily', color: 'White', quantity: 5 },
  { name: 'Tulip', color: 'Yellow', quantity: 8 },
];

  constructor() { }

  // Method to get all flower items
  getFlowerItems(): Flower[] {
    return this.flowerList;
  }

  // Method to add a new flower to the list
  addFlowerItem(flower: Flower) {
    this.flowerList.push(flower);
  }

  // Method to update a flower item
  updateFlowerItem(index: number, updatedFlower: Flower) {
    this.flowerList[index] = updatedFlower;
  }

  // Method to remove a flower item
  removeFlowerItem(index: number) {
    this.flowerList.splice(index, 1);
  }

}
