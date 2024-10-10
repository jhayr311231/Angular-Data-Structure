import { Injectable } from '@angular/core';


// Define the Animal interface
interface Animal {
  name: string;
  habitat: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalListService {
  private animals: Animal[] = [
    { name: 'Lion', habitat: 'Savanna' },
    { name: 'Penguin', habitat: 'Antarctica' },
    { name: 'Elephant', habitat: 'Forest' },
  ];

  constructor() { }

  // Method to get the list of animals
  getAnimalList(): Animal[] {
    return this.animals;
  }
}
