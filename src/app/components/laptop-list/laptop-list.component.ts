import { Component } from '@angular/core';
import { LaptopListService } from '../../services/laptop-list.service'; // Import the service.

// Define the Laptop interface
interface Laptop {
  model: string;
  brand: string;
  specifications: string; // Specifications as a string
}

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
   // Properties for new laptop input values
   newLaptopModel: string = '';
   newLaptopBrand: string = '';
   newLaptopSpecifications: string = '';

   // List of laptops
   laptopList: Laptop[] = [
     { model: 'XPS 13', brand: 'Dell', specifications: 'Intel i7, 16GB RAM, 512GB SSD' },
     { model: 'MacBook Air', brand: 'Apple', specifications: 'Apple M1, 8GB RAM, 256GB SSD' },
     { model: 'ThinkPad X1', brand: 'Lenovo', specifications: 'Intel i7, 16GB RAM, 1TB SSD' },
   ];

   // Property for search input
   searchQuery: string = '';

   // Property to hold the index of the laptop being edited
   editIndex: number | null = null;

   // Temporary properties to store the edited laptop values
   editedLaptopModel: string = '';
   editedLaptopBrand: string = '';
   editedLaptopSpecifications: string = '';

   constructor(private laptopService: LaptopListService) {
    // Fetch the laptop list from the service
    this.laptopList = this.laptopService.getLaptops();
  }

   // Method to add a new laptop to the list
   addLaptop() {
     if (this.newLaptopModel.trim() && this.newLaptopBrand.trim() && this.newLaptopSpecifications.trim()) {
       this.laptopList.push({
         model: this.newLaptopModel,
         brand: this.newLaptopBrand,
         specifications: this.newLaptopSpecifications
       });
       this.newLaptopModel = ''; // Reset input fields
       this.newLaptopBrand = '';
       this.newLaptopSpecifications = '';
     }
   }

   // Method to get the filtered list of laptops based on the search query
   getFilteredList(): Laptop[] {
     if (this.searchQuery.trim()) {
       return this.laptopList.filter(laptop =>
         laptop.model.toLowerCase().includes(this.searchQuery.toLowerCase())
       );
     }
     return this.laptopList;
   }

   // Method to edit a laptop item
   editLaptop(index: number) {
     this.editIndex = index;
     this.editedLaptopModel = this.laptopList[index].model;
     this.editedLaptopBrand = this.laptopList[index].brand;
     this.editedLaptopSpecifications = this.laptopList[index].specifications;
   }

   // Method to save the edited laptop
   saveEdit() {
     if (this.editIndex !== null) {
       this.laptopList[this.editIndex] = {
         model: this.editedLaptopModel,
         brand: this.editedLaptopBrand,
         specifications: this.editedLaptopSpecifications
       };
       this.editIndex = null; // Exit edit mode
       this.editedLaptopModel = ''; // Reset edit input
       this.editedLaptopBrand = ''; // Reset edit input
       this.editedLaptopSpecifications = ''; // Reset edit input
     }
   }

   // Method to remove a laptop from the list
   removeLaptop(index: number) {
     this.laptopList.splice(index, 1);
   }

}
