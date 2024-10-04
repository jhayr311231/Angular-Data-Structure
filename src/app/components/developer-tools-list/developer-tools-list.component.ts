import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  tools: { name: string; version: string; description: string }[] = []; // Array to hold tool details
  newToolName: string = ''; // Variable to hold new tool name input
  newToolVersion: string = ''; // Variable to hold new tool version input
  newToolDescription: string = ''; // Variable to hold new tool description input
  searchTerm: string = ''; // Variable to hold search term

  // Method to add a new tool
  addTool() {
    if (this.newToolName.trim() !== '' && this.newToolVersion.trim() !== '' && this.newToolDescription.trim() !== '') {
      this.tools.push({
        name: this.newToolName.trim(),
        version: this.newToolVersion.trim(),
        description: this.newToolDescription.trim(),
      });
      this.newToolName = ''; // Clear input field
      this.newToolVersion = ''; // Clear input field
      this.newToolDescription = ''; // Clear input field
    }
  }

  // Method to remove a tool by index
  removeTool(index: number) {
    this.tools.splice(index, 1);
  }

  // Method to edit a tool
  editTool(index: number) {
    const updatedName = prompt('Edit tool name:', this.tools[index].name);
    const updatedVersion = prompt('Edit tool version:', this.tools[index].version);
    const updatedDescription = prompt('Edit tool description:', this.tools[index].description);
    if (updatedName !== null && updatedVersion !== null && updatedDescription !== null) {
      this.tools[index] = {
        name: updatedName,
        version: updatedVersion,
        description: updatedDescription,
      };
    }
  }

  // Method to get filtered tool list based on search term
  getFilteredTools() {
    return this.tools.filter(tool => 
      tool.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      tool.version.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      tool.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
