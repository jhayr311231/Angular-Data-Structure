import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: string[] = []; // Array to hold the list of courses
  newCourse: string = ''; // Variable to bind to the input field

  // Method to add a new course to the list
  addCourse() {
    if (this.newCourse.trim()) { // Check if the input is not empty
      this.courses.push(this.newCourse.trim());
      this.newCourse = ''; // Clear the input field after adding
    }
  }

  // Method to remove a course from the list
  removeCourse(index: number) {
    this.courses.splice(index, 1); // Remove the course at the specified index
  }

}
