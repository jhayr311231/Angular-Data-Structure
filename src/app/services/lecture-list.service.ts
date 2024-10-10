import { Injectable } from '@angular/core';

// Define the Lecture interface
export interface Lecture {
  title: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class LectureListService {
// List of lectures scheduled for a course
private lectureList: Lecture[] = [
  { title: 'Introduction to Angular', date: '2024-10-01', time: '10:00 AM' },
  { title: 'Advanced TypeScript', date: '2024-10-08', time: '11:00 AM' },
  { title: 'Building Responsive Websites', date: '2024-10-15', time: '09:00 AM' },
];

  constructor() { }
 // Method to get the list of lectures
 getLectures(): Lecture[] {
  return this.lectureList;
}

// Method to add a new lecture
addLecture(lecture: Lecture) {
  this.lectureList.push(lecture);
}

// Method to edit a lecture
editLecture(index: number, lecture: Lecture) {
  this.lectureList[index] = lecture;
}

// Method to remove a lecture
removeLecture(index: number) {
  this.lectureList.splice(index, 1);
}

// Method to filter lectures based on a search query
filterLectures(query: string): Lecture[] {
  if (query.trim()) {
    return this.lectureList.filter(lecture =>
      lecture.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return this.lectureList;
}
}
