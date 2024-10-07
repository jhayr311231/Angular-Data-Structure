import { Component } from '@angular/core';
import { StudentListService } from '../../services/student-list.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  newStudent: string = ''; // Input field for new student
  students: string[] = []; // List of students

  constructor(private studentListService: StudentListService) {
    this.students = this.studentListService.getStudentList(); // Fetch the initial list of students
  }

  // Method to add a new student
  addStudent() {
    this.studentListService.addStudent(this.newStudent); // Add new student via service
    this.newStudent = ''; // Clear the input field
  }
}
