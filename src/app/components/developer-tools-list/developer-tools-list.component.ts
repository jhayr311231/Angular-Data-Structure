import { Component } from '@angular/core';
import { DeveloperToolsListService } from '../../services/developer-tools-list.service'; // Make sure to import the interface

export interface DeveloperTool {
  name: string;
  version: string;
  description: string;
  category: string; // e.g., IDE, version control, etc.
}
@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrls: ['./developer-tools-list.component.css']
})
export class DeveloperToolsListComponent {
  tools: DeveloperTool[] = []; // Array to hold tool details
  newTool: DeveloperTool = { name: '', version: '', description: '', category: '' }; // Updated to include category
  searchTerm: string = ''; // Variable to hold search term

  constructor(private developerToolsListService: DeveloperToolsListService) {
    this.tools = this.developerToolsListService.getDeveloperTools(); // Load initial tools
  }

   // Method to add a new tool
   addTool() {
    if (this.newTool.name.trim() && this.newTool.version.trim() && this.newTool.description.trim() && this.newTool.category.trim()) {
      this.developerToolsListService.addDeveloperTool({ ...this.newTool }); // Add new tool
      this.resetNewTool(); // Clear input fields
    }
  }

  // Method to reset new tool input
  resetNewTool() {
    this.newTool = { name: '', version: '', description: '', category: '' }; // Reset all fields
  }

  // Method to remove a tool by index
  removeTool(index: number) {
    this.developerToolsListService.removeDeveloperTool(index); // Remove tool from service
  }

  // Method to edit a tool
  editTool(index: number) {
    const updatedTool = this.tools[index];
    const updatedName = prompt('Edit tool name:', updatedTool.name);
    const updatedVersion = prompt('Edit tool version:', updatedTool.version);
    const updatedDescription = prompt('Edit tool description:', updatedTool.description);
    const updatedCategory = prompt('Edit tool category:', updatedTool.category);

    if (updatedName && updatedVersion && updatedDescription && updatedCategory) {
      this.tools[index] = {
        name: updatedName,
        version: updatedVersion,
        description: updatedDescription,
        category: updatedCategory,
      };
    }
  }

  // Method to get filtered tool list based on search term
  getFilteredTools() {
    return this.tools.filter(tool =>
      tool.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      tool.version.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
