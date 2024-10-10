import { Injectable } from '@angular/core';

interface Tool {
  name: string;
  type: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToolListService {
  private tools: Tool[] = [
    { name: 'Hammer', type: 'Hand Tool', quantity: 10 },
    { name: 'Drill', type: 'Power Tool', quantity: 5 },
    { name: 'Wrench', type: 'Hand Tool', quantity: 8 }
  ];


  constructor() { }
  getToolList(): Tool[] {
    return this.tools;
  }

  addTool(tool: Tool): void {
    this.tools.push(tool);
  }

  removeTool(toolName: string): void {
    this.tools = this.tools.filter(tool => tool.name !== toolName);
  }

}
