import { Component } from '@angular/core';
import { SubjectListService } from '../../services/subject-list.service'; // Import the service

interface Subject {
  name: string;
  code: string;
}

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: Subject[] = [
    { name: 'Mathematics', code: 'MATH101' },
    { name: 'Physics', code: 'PHYS101' }
  ];

  newSubject: Subject = { name: '', code: '' };
  editIndex: number | null = null;

  constructor(private subjectListService: SubjectListService) {
    // Fetch the initial list of subjects from the service
    this.subjects = this.subjectListService.getSubjectList();
  }

  // Add or edit a subject
  addSubject() {
    if (this.editIndex === null) {
      this.subjects.push({ ...this.newSubject });
    } else {
      this.subjects[this.editIndex] = { ...this.newSubject };
      this.editIndex = null;
    }
    this.resetForm();
  }

  // Edit a subject
  editSubject(index: number) {
    this.newSubject = { ...this.subjects[index] };
    this.editIndex = index;
  }

  // Remove a subject
  removeSubject(index: number) {
    this.subjects.splice(index, 1);
  }

  // Reset the form after adding or editing
  resetForm() {
    this.newSubject = { name: '', code: '' };
  }

}
