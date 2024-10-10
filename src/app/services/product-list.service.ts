import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products = [
    { name: 'Laptop', price: 30000, imageUrl: 'https://i.pinimg.com/564x/78/bf/a8/78bfa893270a0b531705b1c56f25674d.jpg' },
    { name: 'Smartphone', price: 25000, imageUrl: 'https://i.pinimg.com/564x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg' }
  ];

  constructor() { }

  // Method to get the product list
  getProductList() {
    return this.products;
  }
}
