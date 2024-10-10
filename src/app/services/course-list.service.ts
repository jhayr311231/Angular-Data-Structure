import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  private courses: string[] = [];

  constructor() { }
 // Method to get the list of courses
 getCourseList(): string[] {
  return this.courses;
}

// Method to add a new course
addCourse(newCourse: string): void {
  if (newCourse.trim()) {
    this.courses.push(newCourse.trim());
  }
}

}
