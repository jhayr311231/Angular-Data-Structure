import { Component } from '@angular/core';

// Define the App interface
interface App {
  name: string;
  category: string; // Category of the app (e.g., Social Media, Game, Productivity, etc.)
  rating: number; // App rating
  description: string; // Brief description of the app
}

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
   // Properties for new app input values
   newAppName: string = '';
   newAppCategory: string = '';
   newAppRating: number = 0;
   newAppDescription: string = '';
 
   // List of mobile apps
   appList: App[] = [
     { name: 'WhatsApp', category: 'Social Media', rating: 4.8, description: 'Messaging app' },
     { name: 'Angry Birds', category: 'Game', rating: 4.5, description: 'Fun game with birds' },
     { name: 'Evernote', category: 'Productivity', rating: 4.7, description: 'Note-taking app' },
   ];
 
   // Property for search input
   searchQuery: string = '';
 
   // Property to hold the index of the app item being edited
   editIndex: number | null = null;
 
   // Temporary properties to store the edited app values
   editedAppName: string = '';
   editedAppCategory: string = '';
   editedAppRating: number = 0;
   editedAppDescription: string = '';
 
   // Method to add a new app to the list
   addApp() {
     if (this.newAppName.trim() && this.newAppCategory.trim() &&
         this.newAppRating > 0 && this.newAppDescription.trim()) {
       this.appList.push({
         name: this.newAppName,
         category: this.newAppCategory,
         rating: this.newAppRating,
         description: this.newAppDescription
       });
       // Reset input fields
       this.newAppName = '';
       this.newAppCategory = '';
       this.newAppRating = 0;
       this.newAppDescription = '';
     }
   }
 
   // Method to get the filtered list of apps based on the search query
   getFilteredApps(): App[] {
     if (this.searchQuery.trim()) {
       return this.appList.filter(app =>
         app.name.toLowerCase().includes(this.searchQuery.toLowerCase())
       );
     }
     return this.appList;
   }
 
   // Method to edit an app item
   editApp(index: number) {
     this.editIndex = index;
     this.editedAppName = this.appList[index].name;
     this.editedAppCategory = this.appList[index].category;
     this.editedAppRating = this.appList[index].rating;
     this.editedAppDescription = this.appList[index].description;
   }
 
   // Method to save the edited app
   saveEdit() {
     if (this.editIndex !== null) {
       this.appList[this.editIndex] = {
         name: this.editedAppName,
         category: this.editedAppCategory,
         rating: this.editedAppRating,
         description: this.editedAppDescription
       };
       this.editIndex = null; // Exit edit mode
       // Reset edit input
       this.editedAppName = '';
       this.editedAppCategory = '';
       this.editedAppRating = 0;
       this.editedAppDescription = '';
     }
   }
 
   // Method to remove an app from the list
   removeApp(index: number) {
     this.appList.splice(index, 1);
   }

}
