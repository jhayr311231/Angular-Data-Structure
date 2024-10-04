import { Component } from '@angular/core';

// Define the LaptopSpecification interface
interface LaptopSpecification {
  model: string;
  processor: string;
  ram: string; // RAM size
  storage: string; // Storage type and size
  graphics: string; // Graphics card
}

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
   // Properties for new specification input values
   newSpecModel: string = '';
   newSpecProcessor: string = '';
   newSpecRam: string = '';
   newSpecStorage: string = '';
   newSpecGraphics: string = '';
 
   // List of laptop specifications
   specificationsList: LaptopSpecification[] = [
     { model: 'XPS 13', processor: 'Intel i7', ram: '16GB', storage: '512GB SSD', graphics: 'Integrated' },
     { model: 'MacBook Air', processor: 'Apple M1', ram: '8GB', storage: '256GB SSD', graphics: 'Integrated' },
     { model: 'ThinkPad X1', processor: 'Intel i7', ram: '16GB', storage: '1TB SSD', graphics: 'NVIDIA GeForce' },
   ];
 
   // Property for search input
   searchQuery: string = '';
 
   // Property to hold the index of the specification being edited
   editIndex: number | null = null;
 
   // Temporary properties to store the edited specification values
   editedSpecModel: string = '';
   editedSpecProcessor: string = '';
   editedSpecRam: string = '';
   editedSpecStorage: string = '';
   editedSpecGraphics: string = '';
 
   // Method to add a new specification to the list
   addSpecification() {
     if (this.newSpecModel.trim() && this.newSpecProcessor.trim() &&
         this.newSpecRam.trim() && this.newSpecStorage.trim() && this.newSpecGraphics.trim()) {
       this.specificationsList.push({
         model: this.newSpecModel,
         processor: this.newSpecProcessor,
         ram: this.newSpecRam,
         storage: this.newSpecStorage,
         graphics: this.newSpecGraphics
       });
       // Reset input fields
       this.newSpecModel = '';
       this.newSpecProcessor = '';
       this.newSpecRam = '';
       this.newSpecStorage = '';
       this.newSpecGraphics = '';
     }
   }
 
   // Method to get the filtered list of specifications based on the search query
   getFilteredSpecifications(): LaptopSpecification[] {
     if (this.searchQuery.trim()) {
       return this.specificationsList.filter(spec =>
         spec.model.toLowerCase().includes(this.searchQuery.toLowerCase())
       );
     }
     return this.specificationsList;
   }
 
   // Method to edit a specification item
   editSpecification(index: number) {
     this.editIndex = index;
     this.editedSpecModel = this.specificationsList[index].model;
     this.editedSpecProcessor = this.specificationsList[index].processor;
     this.editedSpecRam = this.specificationsList[index].ram;
     this.editedSpecStorage = this.specificationsList[index].storage;
     this.editedSpecGraphics = this.specificationsList[index].graphics;
   }
 
   // Method to save the edited specification
   saveEdit() {
     if (this.editIndex !== null) {
       this.specificationsList[this.editIndex] = {
         model: this.editedSpecModel,
         processor: this.editedSpecProcessor,
         ram: this.editedSpecRam,
         storage: this.editedSpecStorage,
         graphics: this.editedSpecGraphics
       };
       this.editIndex = null; // Exit edit mode
       // Reset edit input
       this.editedSpecModel = '';
       this.editedSpecProcessor = '';
       this.editedSpecRam = '';
       this.editedSpecStorage = '';
       this.editedSpecGraphics = '';
     }
   }
 
   // Method to remove a specification from the list
   removeSpecification(index: number) {
     this.specificationsList.splice(index, 1);
   }

}
