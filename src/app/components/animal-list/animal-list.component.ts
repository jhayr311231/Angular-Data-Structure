import { Component } from '@angular/core';
import { AnimalListService } from '../../services/animal-list.service'; // Import the service

// Define the Animal interface
interface Animal {
  name: string;
  habitat: string;
}

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AnimalListComponent {
  // Array to store the animals
  animals: Animal[] = []; // Initialize as an empty array

  constructor(private animalListService: AnimalListService) {
    this.animals = this.animalListService.getAnimalList(); // Fetch the initial list of animals
  }

  // Model for new animal entry
  newAnimal: Animal = { name: '', habitat: '' };
  editIndex: number | null = null;

  // Add or edit an animal
  addAnimal() {
    if (this.editIndex === null) {
      this.animals.push({ ...this.newAnimal });
    } else {
      this.animals[this.editIndex] = { ...this.newAnimal };
      this.editIndex = null;
    }
    this.resetForm();
  }

  // Edit an existing animal
  editAnimal(index: number) {
    this.newAnimal = { ...this.animals[index] };
    this.editIndex = index;
  }

  // Remove an animal from the list
  removeAnimal(index: number) {
    this.animals.splice(index, 1);
  }

  // Reset the form after adding or editing
  resetForm() {
    this.newAnimal = { name: '', habitat: '' };
  }
}
