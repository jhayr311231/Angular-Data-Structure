import { Injectable } from '@angular/core';

// Define the Laptop interface
interface Laptop {
  model: string;
  brand: string;
  specifications: string; // Specifications as a string
}

@Injectable({
  providedIn: 'root'
})
export class LaptopListService {
  private laptopList: Laptop[] = [
    { model: 'XPS 13', brand: 'Dell', specifications: 'Intel i7, 16GB RAM, 512GB SSD' },
    { model: 'MacBook Air', brand: 'Apple', specifications: 'Apple M1, 8GB RAM, 256GB SSD' },
    { model: 'ThinkPad X1', brand: 'Lenovo', specifications: 'Intel i7, 16GB RAM, 1TB SSD' },
  ];
   // Method to get the list of laptops
   getLaptops(): Laptop[] {
    return this.laptopList;
  }

  // Method to add a new laptop to the list
  addLaptop(laptop: Laptop) {
    this.laptopList.push(laptop);
  }

  // Method to edit an existing laptop in the list
  editLaptop(index: number, updatedLaptop: Laptop) {
    this.laptopList[index] = updatedLaptop;
  }

  // Method to remove a laptop from the list
  removeLaptop(index: number) {
    this.laptopList.splice(index, 1);
  }

  constructor() { }
}
