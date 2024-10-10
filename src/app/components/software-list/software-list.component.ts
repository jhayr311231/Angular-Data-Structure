import { Component } from '@angular/core';
import { SoftwareListService } from '../../services/software-list.service'; // Import the service

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
// Property to hold the new software input value
newSoftware: string = '';

// List of installed software
software: string[] = [
  'Visual Studio Code',
  'Google Chrome',
  'Adobe Photoshop',
  'Microsoft Office',
  'Slack',
  'Zoom',
  'Node.js',
  'Git',
];

// Property for search input
searchQuery: string = '';

// Property to hold the index of the software being edited
editIndex: number | null = null;

// Temporary property to store the edited software value
editedSoftware: string = '';

constructor(private softwareListService: SoftwareListService) {}

// Method to add new software to the list
addSoftware() {
  if (this.newSoftware.trim()) {
    this.software.push(this.newSoftware);
    this.newSoftware = ''; // Reset input field
  }
}

// Method to get the filtered list of software based on search query
getFilteredSoftware(): string[] {
  if (this.searchQuery.trim()) {
    return this.software.filter(app =>
      app.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  return this.software;
}

// Method to edit a software entry
editSoftware(index: number) {
  this.editIndex = index;
  this.editedSoftware = this.software[index];
}

// Method to save the edited software entry
saveEdit() {
  if (this.editIndex !== null && this.editedSoftware.trim()) {
    this.software[this.editIndex] = this.editedSoftware;
    this.editIndex = null; // Exit edit mode
    this.editedSoftware = ''; // Reset edit input
  }
}

// Method to remove software from the list
removeSoftware(index: number) {
  this.software.splice(index, 1);
}

}
