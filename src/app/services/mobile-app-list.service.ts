import { Injectable } from '@angular/core';

// Define the App interface
interface App {
  name: string;
  category: string; // Category of the app (e.g., Social Media, Game, Productivity, etc.)
  rating: number; // App rating
  description: string; // Brief description of the app
}

@Injectable({
  providedIn: 'root'
})
export class MobileAppListService {
  private mobileAppList: App[] = [
    { name: 'WhatsApp', category: 'Social Media', rating: 4.8, description: 'Messaging app' },
    { name: 'Angry Birds', category: 'Game', rating: 4.5, description: 'Fun game with birds' },
    { name: 'Evernote', category: 'Productivity', rating: 4.7, description: 'Note-taking app' },
  ];


  constructor() { }
 // Method to get the list of mobile apps
 getMobileAppList(): App[] {
  return this.mobileAppList;
}

// Method to add a new mobile app
addMobileApp(app: App) {
  this.mobileAppList.push(app);
}

// Method to edit an existing mobile app
editMobileApp(index: number, updatedApp: App) {
  this.mobileAppList[index] = updatedApp;
}

// Method to remove a mobile app
removeMobileApp(index: number) {
  this.mobileAppList.splice(index, 1);
}

}
