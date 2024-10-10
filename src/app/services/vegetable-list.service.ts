import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetableListService {
  private vegetables: string[] = ['Carrot', 'Potato', 'Tomato']; // Initial list of vegetables

  constructor() { }

  // Method to get the list of vegetables
  getVegetableList(): string[] {
    return this.vegetables; // Return the list of vegetables
  }

}

