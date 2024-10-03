import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: string[] = ['Alice', 'Bob', 'Charlie']; // Initial list of students
  newStudent: string = ''; // Input field for new student

  // Method to add a new student
  addStudent() {
    if (this.newStudent.trim()) { // Check for empty input
      this.students.push(this.newStudent); // Add new student to the list
      this.newStudent = ''; // Clear the input field
    }
  }

  // Method to fetch the list of students
  getStudentList() {
    return this.students; // Return the list of students
  }

}
