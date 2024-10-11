import { Injectable } from '@angular/core';

export interface DeveloperTool {
  name: string;
  version: string;
  description: string;
  category: string; // e.g., IDE, version control, etc.
}

@Injectable({
  providedIn: 'root',
})
export class DeveloperToolsListService {
  private tools: DeveloperTool[] = [
    { name: 'Visual Studio Code', version: '1.58', description: 'Code editor', category: 'IDE' },
    { name: 'Git', version: '2.32', description: 'Version control', category: 'Version Control' },
  ];

  constructor() { }

  getDeveloperTools(): DeveloperTool[] {
    return this.tools;
  }

  addDeveloperTool(tool: DeveloperTool): void {
    this.tools.push(tool);
  }

  removeDeveloperTool(index: number): void {
    this.tools.splice(index, 1);
  }
}
