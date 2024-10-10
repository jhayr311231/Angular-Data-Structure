import { Injectable } from '@angular/core';

// Subject interface defined here for consistency in service
interface Subject {
  name: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
  private subjects: Subject[] = [
    { name: 'Mathematics', code: 'MATH101' },
    { name: 'Physics', code: 'PHY101' },
    { name: 'Chemistry', code: 'CHEM101' },
  ];

  constructor() { }

 // Method to get the subject list
 getSubjectList() {
  return this.subjects;
}
}
