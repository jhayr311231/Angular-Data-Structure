import { Component } from '@angular/core';
import { ClassroomListService } from '../../services/classroom-list.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
// Properties to hold the new student input values
newStudentName: string = '';
newStudentAge: number | null = null;

// List of students in the classroom
classroomList: { name: string; age: number }[] = [
  { name: 'John Doe', age: 15 },
  { name: 'Jane Smith', age: 14 },
  { name: 'Emily Johnson', age: 16 },
];

// Property for search input
searchQuery: string = '';

// Property to hold the index of the student being edited
editIndex: number | null = null;

// Temporary properties to store the edited student values
editedStudentName: string = '';
editedStudentAge: number | null = null;

constructor(private classroomListService: ClassroomListService) {}


// Method to add a new student to the list
addStudent() {
  if (this.newStudentName.trim() && this.newStudentAge !== null) {
    this.classroomList.push({ name: this.newStudentName, age: this.newStudentAge });
    this.newStudentName = ''; // Reset input field
    this.newStudentAge = null; // Reset input field
  }
}

// Method to get the filtered list of students based on the search query
getFilteredList(): { name: string; age: number }[] {
  if (this.searchQuery.trim()) {
    return this.classroomList.filter(student =>
      student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  return this.classroomList;
}

// Method to edit a student
editStudent(index: number) {
  this.editIndex = index;
  this.editedStudentName = this.classroomList[index].name;
  this.editedStudentAge = this.classroomList[index].age;
}

// Method to save the edited student
saveEdit() {
  if (this.editIndex !== null) {
    this.classroomList[this.editIndex] = {
      name: this.editedStudentName,
      age: this.editedStudentAge!
    };
    this.editIndex = null; // Exit edit mode
    this.editedStudentName = ''; // Reset edit input
    this.editedStudentAge = null; // Reset edit input
  }
}

// Method to remove a student from the list
removeStudent(index: number) {
  this.classroomList.splice(index, 1);
}
}
