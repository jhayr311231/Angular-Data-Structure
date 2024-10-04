import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks: { name: string; version: string; description: string }[] = []; // Array to hold framework details
  newFrameworkName: string = ''; // Variable to hold new framework name input
  newFrameworkVersion: string = ''; // Variable to hold new framework version input
  newFrameworkDescription: string = ''; // Variable to hold new framework description input
  searchTerm: string = ''; // Variable to hold search term

  // Method to add a new framework
  addFramework() {
    if (this.newFrameworkName.trim() !== '' && this.newFrameworkVersion.trim() !== '' && this.newFrameworkDescription.trim() !== '') {
      this.frameworks.push({
        name: this.newFrameworkName.trim(),
        version: this.newFrameworkVersion.trim(),
        description: this.newFrameworkDescription.trim(),
      });
      this.newFrameworkName = ''; // Clear input field
      this.newFrameworkVersion = ''; // Clear input field
      this.newFrameworkDescription = ''; // Clear input field
    }
  }

  // Method to remove a framework by index
  removeFramework(index: number) {
    this.frameworks.splice(index, 1);
  }

  // Method to edit a framework
  editFramework(index: number) {
    const updatedName = prompt('Edit framework name:', this.frameworks[index].name);
    const updatedVersion = prompt('Edit framework version:', this.frameworks[index].version);
    const updatedDescription = prompt('Edit framework description:', this.frameworks[index].description);
    if (updatedName !== null && updatedVersion !== null && updatedDescription !== null) {
      this.frameworks[index] = {
        name: updatedName,
        version: updatedVersion,
        description: updatedDescription,
      };
    }
  }

  // Method to get filtered framework list based on search term
  getFilteredFrameworks() {
    return this.frameworks.filter(framework => 
      framework.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      framework.version.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      framework.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
