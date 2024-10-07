import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private students: string[] = ['Alice', 'Bob', 'Charlie']; // Initial list of students

  // Method to fetch the list of students
  getStudentList(): string[] {
    return this.students;
  }

  // Method to add a new student
  addStudent(newStudent: string): void {
    if (newStudent.trim()) {
      this.students.push(newStudent); // Add new student to the list
    }
  }
}
