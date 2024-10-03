import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: string[] = [];
  newEmployee: string = '';

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
