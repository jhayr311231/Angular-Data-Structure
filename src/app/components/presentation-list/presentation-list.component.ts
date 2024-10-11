import { Component } from '@angular/core';
import { PresentationListService } from '../../services/presentation-list.service';

interface Presentation {
  title: string;
  date: string;
  duration: number;
}

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent {
  newPresentation: Presentation = { title: '', date: '', duration: 0 };
  searchTerm: string = '';
  editIndex: number | null = null;

  constructor(private presentationListService: PresentationListService) {}

  get presentations(): Presentation[] {
    return this.presentationListService.getPresentations();
  }

  getFilteredPresentations(): Presentation[] {
    if (!this.searchTerm) {
      return this.presentations;
    }
    return this.presentations.filter(presentation =>
      presentation.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addPresentation() {
    if (this.newPresentation.title.trim() !== '' && this.newPresentation.duration > 0) {
      if (this.editIndex !== null) {
        this.presentationListService.editPresentation(this.editIndex, this.newPresentation.title, this.newPresentation.date, this.newPresentation.duration);
        this.editIndex = null;
      } else {
        this.presentationListService.addPresentation(this.newPresentation.title, this.newPresentation.date, this.newPresentation.duration);
      }
      this.newPresentation = { title: '', date: '', duration: 0 };
    }
  }

  editPresentation(index: number) {
    const presentation = this.presentations[index];
    this.newPresentation = { ...presentation };
    this.editIndex = index;
  }

  removePresentation(index: number) {
    this.presentationListService.removePresentation(index);
  }
}
