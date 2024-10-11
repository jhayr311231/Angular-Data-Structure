import { Injectable } from '@angular/core';

// Define the LaptopSpecification interface
interface LaptopSpecification {
  model: string;
  processor: string;
  ram: string; // RAM size
  storage: string; // Storage type and size
  graphics: string; // Graphics card
}

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecificationsListService {
 // List of laptop specifications
 private specificationsList: LaptopSpecification[] = [
  { model: 'XPS 13', processor: 'Intel i7', ram: '16GB', storage: '512GB SSD', graphics: 'Integrated' },
  { model: 'MacBook Air', processor: 'Apple M1', ram: '8GB', storage: '256GB SSD', graphics: 'Integrated' },
  { model: 'ThinkPad X1', processor: 'Intel i7', ram: '16GB', storage: '1TB SSD', graphics: 'NVIDIA GeForce' },
];

  constructor() { }

 // Method to get the list of specifications
 getSpecifications(): LaptopSpecification[] {
  return this.specificationsList;
}

// Method to add a new specification
addSpecification(specification: LaptopSpecification) {
  this.specificationsList.push(specification);
}

// Method to edit an existing specification
editSpecification(index: number, updatedSpecification: LaptopSpecification) {
  this.specificationsList[index] = updatedSpecification;
}

// Method to remove a specification
removeSpecification(index: number) {
  this.specificationsList.splice(index, 1);
}
}
