import { Component } from '@angular/core';
import { FlowerListService } from '../../services/flower-list.service';


// Define the Flower interface
interface Flower {
  name: string;
  color: string;
  quantity: number;
}

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
   // Properties for new flower input values
   newFlowerName: string = '';
   newFlowerColor: string = '';
   newFlowerQuantity: number = 0;

   // List of flowers
   flowerList: Flower[] = [
     { name: 'Rose', color: 'Red', quantity: 10 },
     { name: 'Lily', color: 'White', quantity: 5 },
     { name: 'Tulip', color: 'Yellow', quantity: 8 },
   ];

   // Property for search input
   searchQuery: string = '';

   // Property to hold the index of the flower being edited
   editIndex: number | null = null;

   // Temporary properties to store the edited flower values
   editedFlowerName: string = '';
   editedFlowerColor: string = '';
   editedFlowerQuantity: number = 0;

   constructor(private flowerService: FlowerListService) {
    this.flowerList = this.flowerService.getFlowerItems(); // Load flowers from service
  }

   // Method to add a new flower to the list
   addFlower() {
     if (this.newFlowerName.trim() && this.newFlowerColor.trim() && this.newFlowerQuantity > 0) {
       this.flowerList.push({
         name: this.newFlowerName,
         color: this.newFlowerColor,
         quantity: this.newFlowerQuantity
       });
       this.newFlowerName = ''; // Reset input fields
       this.newFlowerColor = '';
       this.newFlowerQuantity = 0;
     }
   }

   // Method to get the filtered list of flowers based on the search query
   getFilteredList(): Flower[] {
     if (this.searchQuery.trim()) {
       return this.flowerList.filter(flower =>
         flower.name.toLowerCase().includes(this.searchQuery.toLowerCase())
       );
     }
     return this.flowerList;
   }

   // Method to edit a flower item
   editFlower(index: number) {
     this.editIndex = index;
     this.editedFlowerName = this.flowerList[index].name;
     this.editedFlowerColor = this.flowerList[index].color;
     this.editedFlowerQuantity = this.flowerList[index].quantity;
   }

   // Method to save the edited flower
   saveEdit() {
     if (this.editIndex !== null) {
       this.flowerList[this.editIndex] = {
         name: this.editedFlowerName,
         color: this.editedFlowerColor,
         quantity: this.editedFlowerQuantity
       };
       this.editIndex = null; // Exit edit mode
       this.editedFlowerName = ''; // Reset edit input
       this.editedFlowerColor = ''; // Reset edit input
       this.editedFlowerQuantity = 0; // Reset edit input
     }
   }

   // Method to remove a flower from the list
   removeFlower(index: number) {
     this.flowerList.splice(index, 1);
   }

}
