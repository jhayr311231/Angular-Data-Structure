import { Component } from '@angular/core';
import { LectureListService } from '../../services/lecture-list.service';

// Define the Lecture interface
interface Lecture {
  title: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
 // Properties to hold new lecture input values
 newLectureTitle: string = '';
 newLectureDate: string = '';
 newLectureTime: string = '';

 // List of lectures scheduled for a course
 lectureList: Lecture[] = [
   { title: 'Introduction to Angular', date: '2024-10-01', time: '10:00 AM' },
   { title: 'Advanced TypeScript', date: '2024-10-08', time: '11:00 AM' },
   { title: 'Building Responsive Websites', date: '2024-10-15', time: '09:00 AM' },
 ];

 // Property for search input
 searchQuery: string = '';

 // Property to hold the index of the lecture being edited
 editIndex: number | null = null;

 // Temporary properties to store the edited lecture values
 editedLectureTitle: string = '';
 editedLectureDate: string = '';
 editedLectureTime: string = '';

 constructor(private lecturelistService: LectureListService) {}

 // Method to add a new lecture to the list
 addLecture() {
   if (this.newLectureTitle.trim() && this.newLectureDate.trim() && this.newLectureTime.trim()) {
     this.lectureList.push({
       title: this.newLectureTitle,
       date: this.newLectureDate,
       time: this.newLectureTime
     });
     this.newLectureTitle = ''; // Reset input fields
     this.newLectureDate = '';
     this.newLectureTime = '';
   }
 }

 // Method to get the filtered list of lectures based on the search query
 getFilteredList(): Lecture[] {
   if (this.searchQuery.trim()) {
     return this.lectureList.filter(lecture =>
       lecture.title.toLowerCase().includes(this.searchQuery.toLowerCase())
     );
   }
   return this.lectureList;
 }

 // Method to edit a lecture
 editLecture(index: number) {
   this.editIndex = index;
   this.editedLectureTitle = this.lectureList[index].title;
   this.editedLectureDate = this.lectureList[index].date;
   this.editedLectureTime = this.lectureList[index].time;
 }

 // Method to save the edited lecture
 saveEdit() {
   if (this.editIndex !== null) {
     this.lectureList[this.editIndex] = {
       title: this.editedLectureTitle,
       date: this.editedLectureDate,
       time: this.editedLectureTime
     };
     this.editIndex = null; // Exit edit mode
     this.editedLectureTitle = ''; // Reset edit input
     this.editedLectureDate = ''; // Reset edit input
     this.editedLectureTime = ''; // Reset edit input
   }
 }

 // Method to remove a lecture from the list
 removeLecture(index: number) {
   this.lectureList.splice(index, 1);
 }


}
