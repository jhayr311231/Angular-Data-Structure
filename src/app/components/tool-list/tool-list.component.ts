import { Component } from '@angular/core';
import { ToolListService } from '../../services/tool-list.service'; // Import the service


interface Tool {
  name: string;
  type: string;
  quantity: number;
}


@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
// Array to store the tools
tools: Tool[] = [
  { name: 'Hammer', type: 'Hand Tool', quantity: 10 },
  { name: 'Drill', type: 'Power Tool', quantity: 5 },
  { name: 'Wrench', type: 'Hand Tool', quantity: 8 }
];

// Model for new tool entry
newTool: Tool = { name: '', type: '', quantity: 0 };
editIndex: number | null = null;

 // Inject the ToolListService
 constructor(private toolListService: ToolListService) {
  this.tools = this.toolListService.getToolList(); // Fetch the initial list of tools
}

// Add or edit a tool
addTool() {
  if (this.editIndex === null) {
    this.tools.push({ ...this.newTool });
  } else {
    this.tools[this.editIndex] = { ...this.newTool };
    this.editIndex = null;
  }
  this.resetForm();
}

// Edit an existing tool
editTool(index: number) {
  this.newTool = { ...this.tools[index] };
  this.editIndex = index;
}

// Remove a tool from the list
removeTool(index: number) {
  this.tools.splice(index, 1);
}

// Reset the form after adding or editing
resetForm() {
  this.newTool = { name: '', type: '', quantity: 0 };
}
 // Method to update the local tools array from the service
 private updateToolList() {
  this.tools = this.toolListService.getToolList(); // Refresh the tools list from the service
}
}
