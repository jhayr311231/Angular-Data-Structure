import { Component } from '@angular/core';

interface Sport {
  name: string;
  category: string;
}

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
   // List of categories
   categories: string[] = ['Indoor', 'Outdoor', 'Water', 'Extreme', 'Racing'];
  
   // Array to store sports
   sports: Sport[] = [
     { name: 'Football', category: 'Outdoor' },
     { name: 'Basketball', category: 'Indoor' },
     { name: 'Swimming', category: 'Water' }
   ];
 
   // Model for new sport entry
   newSport: Sport = { name: '', category: '' };
   filterCategory: string = '';
   editIndex: number | null = null;
 
   // Add or edit a sport
   addSport() {
     if (this.editIndex === null) {
       this.sports.push({ ...this.newSport });
     } else {
       this.sports[this.editIndex] = { ...this.newSport };
       this.editIndex = null;
     }
     this.resetForm();
   }
 
   // Edit an existing sport
   editSport(index: number) {
     this.newSport = { ...this.sports[index] };
     this.editIndex = index;
   }
 
   // Remove a sport from the list
   removeSport(index: number) {
     this.sports.splice(index, 1);
   }
 
   // Filter sports by category
   filterByCategory() {
     if (this.filterCategory === '') {
       return this.sports;
     }
     return this.sports.filter(sport => sport.category === this.filterCategory);
   }
 
   // Reset the form after adding or editing
   resetForm() {
     this.newSport = { name: '', category: '' };
   }

}
