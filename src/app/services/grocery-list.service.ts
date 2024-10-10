import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  private groceryList: { name: string; quantity: number }[] = [
    { name: 'Milk', quantity: 2 },
    { name: 'Eggs', quantity: 12 },
    { name: 'Bread', quantity: 1 },
  ];


  constructor() { }
  getGroceryList() {
    return this.groceryList;
  }

  addGroceryItem(item: { name: string; quantity: number }) {
    this.groceryList.push(item);
  }

  updateGroceryItem(index: number, item: { name: string; quantity: number }) {
    this.groceryList[index] = item;
  }

  removeGroceryItem(index: number) {
    this.groceryList.splice(index, 1);
  }


}
