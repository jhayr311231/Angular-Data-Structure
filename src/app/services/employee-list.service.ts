import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private employees: string[] = [];

  // Method to fetch the list of employees
  getEmployeeList(): string[] {
    return this.employees;
  }

  constructor() { }

// Method to add a new employee
addEmployee(newEmployee: string): void {
  if (newEmployee.trim()) {
    this.employees.push(newEmployee);
  }

}
}
