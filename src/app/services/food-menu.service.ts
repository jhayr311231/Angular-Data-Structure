import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  private menu: { name: string; price: number; description: string }[] = [];

  constructor() {
    // Initial food items
    this.menu = [
      { name: 'Pizza', price: 250, description: 'Delicious cheese pizza' },
      { name: 'Burger', price: 120, description: 'Juicy beef burger' },
      { name: 'Sushi', price: 100, description: 'Fresh sushi rolls' },
    ];
  }

  getMenu() {
    return this.menu;
  }

  addFoodItem(item: { name: string; price: number; description: string }) {
    this.menu.push(item);
  }

  updateFoodItem(index: number, item: { name: string; price: number; description: string }) {
    this.menu[index] = item;
  }

  removeFoodItem(index: number) {
    this.menu.splice(index, 1);
  }
}
