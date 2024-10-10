import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomListService {
  private classroomList: { name: string; age: number }[] = [
    { name: 'John Doe', age: 15 },
    { name: 'Jane Smith', age: 14 },
    { name: 'Emily Johnson', age: 16 },
  ];

  constructor() { }

 // Method to get the list of students
 getClassroomList() {
  return this.classroomList;
}

// Method to add a new student
addStudent(student: { name: string; age: number }) {
  this.classroomList.push(student);
}

// Method to edit an existing student
editStudent(index: number, student: { name: string; age: number }) {
  this.classroomList[index] = student;
}

// Method to remove a student
removeStudent(index: number) {
  this.classroomList.splice(index, 1);
}
}
