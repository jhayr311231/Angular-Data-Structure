import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitListService {
  private fruits: string[] = [];

  constructor() { }

 // Method to get the list of fruits
 getFruitList(): string[] {
  return this.fruits;
}

// Method to add a new fruit
addFruit(newFruit: string): void {
  if (newFruit.trim()) {
    this.fruits.push(newFruit.trim());
  }
}



}
