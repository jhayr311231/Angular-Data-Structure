import { Injectable } from '@angular/core';

export interface Framework {
  name: string;
  version: string;
  description: string;
  category: string; // e.g., front-end, back-end, mobile, etc.
}

@Injectable({
  providedIn: 'root'
})
export class FrameworkListService {
  private frameworks: Framework[] = [
    {
      name: 'Angular',
      version: '12.0.0',
      description: 'A platform for building mobile and desktop web applications.',
      category: 'Front-end'
    },
    {
      name: 'React',
      version: '17.0.2',
      description: 'A JavaScript library for building user interfaces.',
      category: 'Front-end'
    },
    {
      name: 'Node.js',
      version: '14.17.0',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      category: 'Back-end'
    },
    {
      name: 'Django',
      version: '3.2.5',
      description: 'A high-level Python web framework that encourages rapid development.',
      category: 'Back-end'
    },
    {
      name: 'Flutter',
      version: '2.2.3',
      description: 'An open-source UI software development toolkit for building natively compiled applications for mobile, web, and desktop.',
      category: 'Mobile'
    }
  ];

  constructor() {}

  // Method to get all frameworks
  getFrameworks(): Framework[] {
    return this.frameworks;
  }

  // Method to add a new framework
  addFramework(framework: Framework) {
    this.frameworks.push(framework);
  }

  // Method to remove a framework by index
  removeFramework(index: number) {
    this.frameworks.splice(index, 1);
  }

  // Method to edit a framework by index
  editFramework(index: number, updatedFramework: Framework) {
    this.frameworks[index] = updatedFramework;
  }
}

