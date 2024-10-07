import { Component } from '@angular/core';
import { EmployeeListService } from '../../services/employee-list.service'; // Import the service

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: string[] = [];
  newEmployee: string = '';

  constructor(private employeeListService: EmployeeListService) {
    this.employees = this.employeeListService.getEmployeeList(); // Fetch the initial list of employees
  }

  addEmployee() {
    if (this.newEmployee) {
      this.employees.push(this.newEmployee);
      this.newEmployee = ''; // Clear the input field after adding
    }
  }

  getEmployeeList() {
    return this.employees;
  }

}
